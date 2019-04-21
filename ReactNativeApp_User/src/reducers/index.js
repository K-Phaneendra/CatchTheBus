import { combineReducers } from 'redux';
import JourniesReducer from './JourniesReducer';
import RouteMapReducer from './RouteMapReducer';
import LocationsReducer from './LocationsReducer';

export default combineReducers({
  JourniesReducer,
  RouteMapReducer,
  LocationsReducer
});
