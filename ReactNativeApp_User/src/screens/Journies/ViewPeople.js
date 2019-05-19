import React from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { List, ListItem } from 'native-base';
import { Linking } from 'react-native';

const displayPeople = people =>
  people.map((person, index) => (
    <View key={index}>
      <ListItem key={index}>
        <View>
          <Text onPress={() => Linking.openURL(`tel:${person.mobile}`)}>
            {person.name}: {person.mobile}
          </Text>
        </View>
      </ListItem>
    </View>
  ));

export default props => (
  <View>
    <ScrollView>
      <View>
        <Text>Stops of {props.locationName}</Text>
      </View>
      <View>
        <List>{displayPeople(props.people)}</List>
      </View>
      <View>
        <Button title="close" onPress={props.hide} />
      </View>
    </ScrollView>
  </View>
);
