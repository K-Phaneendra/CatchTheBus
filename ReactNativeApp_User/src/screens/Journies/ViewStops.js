import React from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { List, ListItem } from 'native-base';

const displayStops = stops =>
  stops.map((stop, index) => (
    <View key={index}>
      <ListItem key={index} itemDivider>
        <Text>{stop.location.name}</Text>
      </ListItem>
      <ListItem>
        <Text>Boarding People: {stop.people.length}</Text>
      </ListItem>
    </View>
  ));

export default props => (
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
    <ScrollView>
      <View>
        <Text>Stops of {props.journeyName}</Text>
      </View>
      <View>
        <List>{displayStops(props.stops)}</List>
      </View>
      <View>
        <Button title="close" onPress={props.hide} />
      </View>
    </ScrollView>
  </View>
);
