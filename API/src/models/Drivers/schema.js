import { Schema } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    mobile: {
      type: Number
    }
  }
});

export default schema;
