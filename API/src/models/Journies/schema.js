import { Schema } from 'mongoose';
import Buses from '../Buses';
import Locations from '../Locations';
import Drivers from '../Drivers';
import RouteMaps from '../RouteMaps';

const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  bus: {
    type: ObjectId,
    ref: Buses,
    required: [true]
  },
  source: {
    type: ObjectId,
    ref: Locations,
    required: [true]
  },
  destination: {
    type: ObjectId,
    ref: Locations,
    required: [true]
  },
  routeMap: {
    type: ObjectId,
    ref: RouteMaps
  },
  startTime: {
    type: Number
  },
  endTime: {
    type: Number
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  driver: {
    type: ObjectId,
    ref: Drivers,
    required: [true]
  }
});

export default schema;
