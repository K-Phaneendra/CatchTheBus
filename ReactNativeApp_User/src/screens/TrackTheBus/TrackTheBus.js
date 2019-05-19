import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { requestLocationPermission } from '../../actionsPermissions';

const { width, height } = Dimensions.get('window');

// should animate to coordinate on clicking on location icon
class TrackTheBus extends Component {
  state = {
    userLocation: {
      lat: 0,
      long: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    locationError: ''
  };
  componentDidMount() {
    requestLocationPermission().then(permissionResponse => {
      console.log('permissionResponse....', permissionResponse);
      // if permissionResponse is 'authorized', then turn on gps & start tracking gps of user
      // refer to https://www.youtube.com/watch?v=MqLC0kOqrwk for tracking gps
      // refer to https://www.youtube.com/watch?v=KytduDMW_7o to find user location (latitude & longitude)

      if (permissionResponse === 'authorized') {
        this.getLocation();
      }
      if (permissionResponse === 'denied') {
        this.props.navigation.navigate('journies');
      }
    });
  }
  getLocation = () => {
    console.log('in get location');
    let geoOptions = {
      enableHighAccuracy: true, // true = try using GPS
      timeOut: 20000, // i.e. 20sec
      maximumAge: 60 * 60 * 24 // sec*min*hrs = once we get user location, how long to store lat and long
    };
    // getCurrentPosition takes 3 arguments
    // 1. what func to call when this works
    // 2. what func to call when this not works
    // 3. options
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoFailure,
      geoOptions
    );
  };
  geoSuccess = position => {
    const { userLocation } = this.state;
    const obtainedLocation = {
      lat: position.coords.latitude,
      long: position.coords.longitude,
      latitudeDelta: userLocation.latitudeDelta,
      longitudeDelta: userLocation.longitudeDelta
    };
    this.setState({ userLocation: obtainedLocation });
  };
  geoFailure = err => {
    this.setState({ locationError: err.message });
  };

  render() {
    const { userLocation, locationError } = this.state;
    console.log('this.state', this.state);
    console.log('width, height', width, height);
    const initialRegion = {
      latitude: userLocation.lat,
      longitude: userLocation.long,
      latitudeDelta: userLocation.latitudeDelta,
      longitudeDelta: userLocation.longitudeDelta
    };
    if (locationError !== '') {
      return (
        <View>
          <Text>{locationError}</Text>
        </View>
      );
    }
    return (
      <View style={styles.mapStyle}>
        <MapView style={styles.mapStyle} initialRegion={initialRegion}>
          <Marker
            coordinate={initialRegion}
            // on selecting a marker, we can see title and description of the marker
            title={'title'}
            description={'description'}
          />
        </MapView>
        <View
          style={{
            position: 'absolute',
            top: height * 0.76,
            left: width * 0.85
          }}
        >
          <Text>
            <Icon
              name="my-location"
              color="#4F8EF7"
              size={40}
              onClick={this.getLocation}
            />
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1
  }
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(TrackTheBus);
