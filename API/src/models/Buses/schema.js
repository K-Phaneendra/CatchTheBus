import { Schema } from 'mongoose';

const schema = new Schema({
  regNo: {
    type: String,
    required: [true]
  },
  code: {
    type: String
  }
});

export default schema;
