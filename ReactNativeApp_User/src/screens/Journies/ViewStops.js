import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button } from 'react-native';
import ModalWrapper from 'react-native-modal-wrapper';
import { List, ListItem } from 'native-base';
import ViewPeople from './ViewPeople';

const underscoreId = '_id';

class ViewStops extends Component {
  state = {
    viewPeople: false
  };

  toggleViewPeople = stopId => {
    console.log('in toggleViewPeople');
    const { viewPeople } = this.state;
    this.setState({ viewPeople: !viewPeople, stopId });
  };

  viewPeople = (Id, location, people) => {
    const { viewPeople, stopId } = this.state;
    if (stopId === Id) {
      return (
        <View>
          <ModalWrapper
            visible={viewPeople}
            onRequestClose={this.toggleViewPeople}
            containerStyle={{ flexDirection: 'row', alignItems: 'flex-end' }}
            style={{ flex: 1 }}
          >
            <ViewPeople
              locationName={location}
              people={people}
              hide={this.toggleViewPeople}
            />
          </ModalWrapper>
        </View>
      );
    }
  };

  displayList = stops =>
    stops.map((stop, index) => (
      <View key={index}>
        <ListItem key={index} itemDivider>
          <Text>{stop.location.name}</Text>
        </ListItem>
        <ListItem onPress={() => this.toggleViewPeople(stop[underscoreId])}>
          <Text>Boarding People: {stop.people.length}</Text>
        </ListItem>
        {this.viewPeople(stop[underscoreId], stop.location.name, stop.people)}
      </View>
    ));
  displayStops = (journies, selectedJourneyID) =>
    journies.reduce(journey => {
      if (journey[underscoreId] === selectedJourneyID) {
        console.log('matched');
        return (
          <ScrollView>
            <View>
              <Text>
                Stops of{' '}
                {`${journey.source.name} - ${journey.destination.name}`}
              </Text>
            </View>
            <View>
              <List>{this.displayList(journey.routeMap.stops)}</List>
            </View>
            {/* <View>
              <Button title="close" onPress={props.hide} />
            </View> */}
          </ScrollView>
        );
      }
    });

  render() {
    const { journies, selectedJourneyID } = this.props;
    console.log(journies, selectedJourneyID);
    return (
      <View
      // style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   marginTop: 50,
      //   height: 300
      // }}
      >
        {this.displayStops(journies, selectedJourneyID)}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  journies: state.JourniesReducer.journies,
  selectedJourneyID: state.JourniesReducer.selectedJourneyID
});
export default connect(mapStateToProps)(ViewStops);
