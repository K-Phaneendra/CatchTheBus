import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { List, ListItem, InputGroup, Input, Icon } from 'native-base';
import { cloneDeep } from 'lodash';

class DriverLogin extends Component {
  state = {
    loginForm: {
      mobile: ''
    }
  };

  fieldUpdated = (value, key) => {
    const { loginForm } = this.state;
    loginFormClone = cloneDeep(loginForm);
    loginFormClone[key] = value;
    this.setState({ loginForm: loginFormClone });
  };
  submit = () => {
    const { loginForm } = this.state;
    console.log('loginForm', loginForm);
  };
  render() {
    return (
      <View>
        <List>
          <ListItem>
            <InputGroup>
              <Icon name="ios-person" />
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

export default DriverLogin;
