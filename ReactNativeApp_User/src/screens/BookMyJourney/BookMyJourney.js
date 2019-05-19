import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Picker, View, Button } from 'react-native';
import { List, ListItem, InputGroup, Input, Icon } from 'native-base';
import {
  updateFormFields,
  fetchAll
} from '../../actionsDispatch/JourniesDispatch';
import { submitJourneyForm } from '../../actionsAPI/JourniesAPIs';

const underscoreId = '_id';

class BookMyJourney extends Component {
  fieldUpdated = (text, key) => {
    const payload = {
      key,
      text
    };
    updateFormFields(this.props.dispatch, payload);
  };
  submit = () => {
    const { bookJourneyForm } = this.props;
    const routeMapId = bookJourneyForm.routeMapId;
    const locationId = bookJourneyForm.location;
    const formData = {
      idCard: bookJourneyForm.idCard,
      name: bookJourneyForm.name,
      mobile: bookJourneyForm.mobile
    };
    submitJourneyForm(formData, routeMapId, locationId).then(APIResponse => {
      fetchAll(this.props.dispatch, APIResponse);
      alert(APIResponse.data.message);
      this.props.navigation.navigate('journies');
    });
  };
  render() {
    const { bookJourneyForm } = this.props;
    return (
      <View>
        <List>
          <ListItem>
            <Text>Boarding Point:</Text>
            <Picker
              selectedValue={bookJourneyForm.location}
              style={{ height: 50, width: 200 }}
              onValueChange={(itemValue, itemIndex) =>
                this.fieldUpdated(itemValue, 'location')
              }
            >
              {bookJourneyForm.stops.map((stop, index) => (
                <Picker.Item
                  key={index}
                  label={stop.location.name}
                  value={stop.location[underscoreId]}
                />
              ))}
            </Picker>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <InputGroup>
              <Icon name="ios-person" />
              <Input
                placeholder="ID Card No."
                onChangeText={text => this.fieldUpdated(text, 'idCard')}
              />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input
                placeholder="Name"
                onChangeText={text => this.fieldUpdated(text, 'name')}
              />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input
                placeholder="Mobile No."
                onChangeText={text => this.fieldUpdated(text, 'mobile')}
              />
            </InputGroup>
          </ListItem>
        </List>
        <Button title="Submit" onPress={this.submit} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  bookJourneyForm: state.JourniesReducer.bookJourneyForm
});

export default connect(mapStateToProps)(BookMyJourney);
