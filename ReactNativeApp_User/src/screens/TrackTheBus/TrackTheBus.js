import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

class TrackTheBus extends Component {
  render() {
    // const initialRegion = {
    //   latitude: 37.78825,
    //   longitude: -122.4324,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421
    // };
    return (
      <View>
        <Text>in map view</Text>
      </View>
      // <MapView style={styles.mapStyle} initialRegion={initialRegion}>
      //   <Marker
      //     coordinate={initialRegion}
      //     // on selecting a marker, we can see title and description of the marker
      //     title={'title'}
      //     description={'description'}
      //   />
      // </MapView>
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
