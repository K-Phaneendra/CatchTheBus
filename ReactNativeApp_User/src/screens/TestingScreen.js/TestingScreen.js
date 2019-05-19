import React from 'react';
import { View, Text } from 'react-native';

class TestingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log('in cwm');
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log('in cwum');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <View>
        <Text>Hello, world!</Text>
        <Text>It is {this.state.date.toLocaleTimeString()}.</Text>
      </View>
    );
  }
}

export default TestingScreen;
