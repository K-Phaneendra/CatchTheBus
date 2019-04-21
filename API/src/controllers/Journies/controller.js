import { cloneDeep } from 'lodash';
import Journies from '../../models/Journies';
import RouteMaps from '../../models/RouteMaps';
import { SEND } from '../response';
import { populateJournies, updateRouteMap } from './helperFuctions';

const populateString = 'bus source destination driver';

const fetchJournies = async () => {
  const journies = new Promise(resolve => {
    Journies.find({})
      .populate(populateString)
      .exec((err, journies) => {
        if (err) {
          resolve({ error: true, payload: { message: err } });
        } else {
          const populatedJournies = populateJournies(journies);
          populatedJournies.then(journeyData =>
            resolve({ error: false, payload: { journies: journeyData } })
          );
        }
      });
  });
  const data = await journies;
  return data;
};

export const fetchAll = (req, res, next) => {
  const fetchAllJournies = fetchJournies();
  fetchAllJournies.then(obj => {
    SEND(res, obj.error, obj.payload);
  });
};

export const submitJourneyForm = (req, res, next) => {
  RouteMaps.findById(req.params.routeMapId).exec((err, routeMap) => {
    if (!err) {
      const routeMapClone = cloneDeep(routeMap);
      routeMapClone.stops.map(stop => {
        if (stop.location.toString() === req.params.locationId.toString()) {
          stop.people.push(req.body);
        }
        return stop;
      });
      const update = updateRouteMap(req.params.routeMapId, routeMapClone);
      const fetchAllJournies = fetchJournies();
      Promise.all([update, fetchAllJournies]).then(data => {
        SEND(res, false, {
          journies: data[1].payload.journies,
          message: 'Booking Successfull'
        });
      });
    }
  });
};
