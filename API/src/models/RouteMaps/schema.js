import { Schema } from 'mongoose';
import Locations from '../Locations';

const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  stops: [
    {
      location: {
        type: ObjectId,
        ref: Locations
      },
      people: []
    }
  ]
});

export default schema;
