import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import DocForm from 'react-cross-form';
// or any pure javascript modules available in npm
import { Card, Button } from 'react-native-elements'; // Version can be specified in package.json
import TextInput from './TextInput';
import CheckBox from './CheckBox';

const FORM_FIELDS = [
  {
    key: 'Full Name',
    label: 'Full Name',
    required: true,
    component: TextInput,
    placeholder: 'Type your full name...',
    validators: {
      presence: { message: 'is required' },
      length: { minimum: 3 },
    },
  },
  {
    key: 'Date',
    label: 'Date',
    required: true,
    component: TextInput,
    placeholder: 'Type your date...',
    validators: {
      presence: { message: 'is required' },
      length: { minimum: 3 },
    },
  },
  {
    key: 'Time',
    label: 'Time',
    required: true,
    component: TextInput,
    placeholder: 'Type your time...',
    validators: {
      presence: { message: 'is required' },
      length: { minimum: 3 },
    },
  },
  {
    key: 'Address',
    label: 'Address',
    required: true,
    component: TextInput,
    placeholder: 'Type your address...',
    validators: {
      length: { minimum: 3 },
    },
  },
  {
    key: 'Post Code',
    label: 'Post Code',
    required: true,
    component: TextInput,
    placeholder: 'Type your post code...',
    validators: {
      presence: { message: 'is required' },
      length: { minimum: 3 },
    },
  },
  {
    key: 'Total Players',
    label: 'Total Players',
    required: true,
    component: TextInput,
    placeholder: 'Type your total players...',
    validators: {
      presence: { message: 'is required' },
      length: { minimum: 3 },
    },
  },
  {
    key: 'Players Needed',
    label: 'Players Needed',
    required: true,
    component: TextInput,
    placeholder: 'Type your players needed...',
    validators: {
      presence: { message: 'is required' },
      length: { minimum: 3 },
    },
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        fullName: null,
        lastName: null,
        date: null,
        confirm: null,
      },
      isFormValid: false,
      validateType: 'onFocus',
    };
  }
  render() {
    return (
        <View style={styles.container}>
          <Text>This is a example of react-cross-form</Text>
          <Card>
            <DocForm
                fields={FORM_FIELDS}
                data={this.state.form}
                onChange={({ key, updateData }) => {
                  this.setState({ form: updateData });
                  if (key === 'lastName') {
                    this.setState({ validateType: 'all' });
                  }
                }}
                validateType={this.state.validateType}
                onValidateStateChanged={({ isValid }) => {
                  this.setState({ isFormValid: isValid });
                }}
            />
            <Button
                disabled={!this.state.isFormValid}
                title={'Submit'}
                onPress={() => alert(JSON.stringify(this.state.form))}
            />
          </Card>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  }
});
