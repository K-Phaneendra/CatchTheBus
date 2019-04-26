import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Journies from './src/screens/Journies/Journies';
import BookMyJourney from './src/screens/BookMyJourney/BookMyJourney';
import TrackTheBus from './src/screens/TrackTheBus/TrackTheBus';
// import Home from './src/screens/Home/Home';
// import RouteMaps from './src/screens/RouteMaps/RouteMaps';

const AppNavigator = createStackNavigator({
  // home: Home,
  // routeMaps: RouteMaps,
  journies: Journies,
  bookMyJourney: BookMyJourney,
  trackTheBus: TrackTheBus
});

const AppContainer = createAppContainer(AppNavigator);

export default class Navigator extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
