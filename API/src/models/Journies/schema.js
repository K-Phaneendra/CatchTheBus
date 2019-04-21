import { Schema } from 'mongoose';
import Buses from '../Buses';

const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  bus: {
    type: ObjectId,
    ref: Buses,
    required: [true]
  },
  source: {},
  destination: {},
  routeMap: {},
  startTime: {},
  endTime: {},
  startDate: {},
  endDate: {},
  driver: {}
});

export default schema;
