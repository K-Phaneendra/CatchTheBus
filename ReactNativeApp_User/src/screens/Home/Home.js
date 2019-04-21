import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Hi.. Welcome to Catch the Bus</Text>
        <Button
          onPress={() => this.props.navigation.navigate('journies')}
          title="Travel as a Volunteer"
        />
      </View>
    );
  }
}

export default Home;
