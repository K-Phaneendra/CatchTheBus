import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, Picker } from 'react-native';

const underscoreId = '_id';

const displayLocations = locations =>
  locations.map(location => (
    <Picker.Item label={location.name} value={location[underscoreId]} />
  ));

class RouteMaps extends Component {
  state = {
    source: '',
    destination: ''
  };
  render() {
    const { locations, routeMaps } = this.props;
    return (
      <View>
        <View>
          <Text>Source: </Text>
          <Picker
            selectedValue={this.state.source}
            // style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ source: itemValue })
            }
          >
            {displayLocations(locations)}
          </Picker>
        </View>

        <View>
          <Text>Destination: </Text>
          <Picker
            selectedValue={this.state.destination}
            // style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ destination: itemValue })
            }
          >
            {displayLocations(locations)}
          </Picker>
        </View>

        <View>
          <Button onPress={this.searchForBuses} title="Search For Buses" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  locations: state.LocationsReducer.locations,
  routeMaps: state.RouteMapReducer.routeMaps
});

export default connect(mapStateToProps)(RouteMaps);
