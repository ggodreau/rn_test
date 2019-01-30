import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, TouchableNativeFeedback, Text } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    //Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.Ripple('white', false)}>
            <View style={{width: 150, height: 100, backgroundColor: 'gray'}}>
              <Text style={{margin: 30}}>click me pls</Text>
            </View>
          </TouchableNativeFeedback>
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
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
