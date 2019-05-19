import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, ScrollView } from 'react-native';
import { fetchJournies } from '../../actionsAPI/JourniesAPIs';
import {
  fetchAll,
  clearBookJourneyForm,
  selectedJourneyToSeeStops
} from '../../actionsDispatch/JourniesDispatch';
import CardComponent from '../../components/Card';
import { convertISODateToReadable } from '../../helpers/reusableFunctions';

const underscoreId = '_id';
class Journies extends Component {
  componentDidMount() {
    fetchJournies().then(APIResponse => {
      fetchAll(this.props.dispatch, APIResponse);
    });
  }
  toggleViewStops = journeyId => {
    const { dispatch } = this.props;
    dispatch(selectedJourneyToSeeStops(dispatch, journeyId));
    this.props.navigation.navigate('viewStops');
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
              {/* <Button
                onPress={() => this.props.navigation.navigate('trackTheBus')}
                title={`Track Bus`}
              /> */}
              {/* <Button
                onPress={() => this.props.navigation.navigate('testingScreen')}
                title={`Testing Screen`}
              /> */}
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
          </View>
        </CardComponent>
      </View>
    ));

  render() {
    const { journies } = this.props;
    return (
      <View>
        <View>
          {/* <Text>
            A date picker will be available here.. It will fetch journies based
            on selected date
          </Text> */}
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
