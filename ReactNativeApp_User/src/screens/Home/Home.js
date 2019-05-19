import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Hi.. Welcome to Catch the Bus</Text>
        <Text>Who Are You</Text>
        <Button
          onPress={() => this.props.navigation.navigate('driverLogin')}
          title="Driver"
        />
        <Button
          onPress={() => this.props.navigation.navigate('journies')}
          title="Volunteer"
        />
      </View>
    );
  }
}

export default Home;
