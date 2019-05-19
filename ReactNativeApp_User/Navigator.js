import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Journies from './src/screens/Journies/Journies';
import BookMyJourney from './src/screens/BookMyJourney/BookMyJourney';
import TrackTheBus from './src/screens/TrackTheBus/TrackTheBus';
import TestingScreen from './src/screens/TestingScreen.js/TestingScreen';
import DriverLogin from './src/screens/Login/DriverLogin';
import Home from './src/screens/Home/Home';
import ViewStops from './src/screens/Journies/ViewStops';
// import RouteMaps from './src/screens/RouteMaps/RouteMaps';

const AppNavigator = createStackNavigator({
  // home: Home,
  // driverLogin: DriverLogin,
  // routeMaps: RouteMaps,
  journies: {
    screen: Journies,
    navigationOptions: {
      headerTitle: 'Journies'
    }
  },
  viewStops: {
    screen: ViewStops,
    navigationOptions: {
      headerTitle: 'Stops'
    }
  },
  bookMyJourney: {
    screen: BookMyJourney,
    navigationOptions: {
      headerTitle: 'Book My Journey'
    }
  }
  // testingScreen: TestingScreen,
  // trackTheBus: TrackTheBus
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
