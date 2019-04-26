import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, ScrollView } from 'react-native';
import ModalWrapper from 'react-native-modal-wrapper';
import { fetchJournies } from '../../actionsAPI/JourniesAPIs';
import {
  fetchAll,
  clearBookJourneyForm
} from '../../actionsDispatch/JourniesDispatch';
import CardComponent from '../../components/Card';
import ViewStops from './ViewStops';
import { convertISODateToReadable } from '../../helpers/reusableFunctions';

const underscoreId = '_id';
class Journies extends Component {
  state = {
    viewStops: false
  };
  componentDidMount() {
    fetchJournies().then(APIResponse => {
      fetchAll(this.props.dispatch, APIResponse);
    });
  }
  toggleViewStops = journeyId => {
    const { viewStops } = this.state;
    this.setState({ viewStops: !viewStops, journeyId });
  };

  viewStops = (stops, id, sourceDestination) => {
    const { viewStops, journeyId } = this.state;
    if (journeyId === id) {
      return (
        <View>
          <ModalWrapper
            // animationType="slide"
            // transparent={false}
            visible={viewStops}
            onRequestClose={this.toggleViewStops}
            containerStyle={{ flexDirection: 'row', alignItems: 'flex-end' }}
            style={{ flex: 1 }}
          >
            <ViewStops
              journeyName={sourceDestination}
              stops={stops}
              hide={this.toggleViewStops}
            />
          </ModalWrapper>
        </View>
      );
    }
  };
  NavigateToForm = routeMap => {
    const payload = {
      routeMapId: routeMap[underscoreId],
      stops: routeMap.stops
    };
    clearBookJourneyForm(this.props.dispatch, payload);
    this.props.navigation.navigate('bookMyJourney');
  };
  displayJournies = journies =>
    journies.map((journey, index) => (
      <View key={index}>
        <CardComponent
          header={`${journey.source.name} - ${journey.destination.name}`}
          footer={
            <View>
              <Button
                onPress={() => this.NavigateToForm(journey.routeMap)}
                title={'Book Now'}
              />
              <Button
                onPress={() => this.props.navigation.navigate('trackTheBus')}
                title={`Track Bus`}
              />
            </View>
          }
        >
          <View>
            <Text>
              Start Date: {convertISODateToReadable(journey.startDate)} Time:{' '}
              {journey.startTime} Hrs
            </Text>
            <Text>
              End Date: {convertISODateToReadable(journey.endDate)} Time:{' '}
              {journey.endTime} Hrs
            </Text>
            <Button
              onPress={() => this.toggleViewStops(journey[underscoreId])}
              title={`View Stops: ${journey.routeMap.stops.length}`}
            />
            {this.viewStops(
              journey.routeMap.stops,
              journey[underscoreId],
              `${journey.source.name} - ${journey.destination.name}`
            )}
          </View>
        </CardComponent>
      </View>
    ));

  render() {
    const { journies } = this.props;
    return (
      <View>
        <View>
          <Text>
            A date picker will be available here.. It will fetch journies based
            on selected date
          </Text>
        </View>
        <ScrollView>{this.displayJournies(journies)}</ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  journies: state.JourniesReducer.journies
});

export default connect(mapStateToProps)(Journies);
