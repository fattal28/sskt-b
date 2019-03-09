import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {

    // constuctor() {
    //   this.routeChange1 = this.routeChange1.bind(this);
    //   this.routeChange2 = this.routeChange2.bind(this);
    // }

    // routeChange1() {
    //     let path1 = `/listgames.js`;
    //     this.props.history.push(path1);
    // }

    // routeChange2() {
    //     let path2 = '/hostform.js';
    //     this.props.history.push.(path2)
    // }

    _onPressButton3() {
        Alert.alert('Redirect to FAQ page')
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.routeChange1}
            title="Join a Game"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.routeChange2}
            title="Host a Game"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton3}
            title="Having trouble?"
          />
          <Button
            onPress={this._onPressButton}
            title="temp"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
