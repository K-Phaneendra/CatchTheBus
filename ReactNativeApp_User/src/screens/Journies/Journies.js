import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { fetchJournies } from '../../actionsAPI/JourniesAPIs';
import { fetchAll } from '../../actionsDispatch/JourniesDispatch';

// const displayJournies = journies =>
//   journies.map(journey => <Text>{journey.startTime}</Text>);

class Journies extends Component {
  componentDidMount() {
    fetchJournies().then(APIResponse => {
      fetchAll(this.props.dispatch, APIResponse);
    });
  }
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
        {/* <View>{displayJournies(journies)}</View> */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  journies: state.JourniesReducer.journies
});

export default connect(mapStateToProps)(Journies);
