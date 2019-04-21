import mongoose from 'mongoose';
import schema from './schema';
// add hooks here
schema.pre('save', function() {
  return doStuff().then(() => doMoreStuff());
});

const model = mongoose.model('Buses', schema);
export default model;
