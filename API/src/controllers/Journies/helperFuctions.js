import RouteMaps from '../../models/RouteMaps';

const populateRouteMap = async routeMapId => {
  const populatedRouteMap = new Promise(resolve => {
    RouteMaps.findById(routeMapId)
      .populate('stops.location')
      .then(routeMap => {
        resolve(routeMap);
      });
  });
  const data = await populatedRouteMap;
  return data;
};
const prepareJourneyObj = journey => {
  return new Promise(async resolve => {
    const obj = { ...journey.toObject() };
    const routeMap = populateRouteMap(journey.routeMap);

    Promise.all([routeMap]).then(result => {
      obj.routeMap = result[0];
      resolve(obj);
    });
  });
};
export const populateJournies = async journies => {
  return await Promise.all(journies.map(journey => prepareJourneyObj(journey)));
};

export const updateRouteMap = async (routeMapId, body) => {
  const updatedRouteMap = new Promise(resolve => {
    RouteMaps.findOneAndUpdate({ _id: routeMapId }, body, {
      new: true,
      upsert: true,
      returnNewDocument: true
    }).then(routeMap => {
      resolve(routeMap);
    });
  });
  const data = await updatedRouteMap;
  return data;
};
