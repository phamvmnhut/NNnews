/**
 * NNnews App
 * https://github.com/phamvmnhut/NNnews
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MainTab from './Navigation/MainTab';

class App extends Component {
  render() {
    const {container} = styles;
    return (
      <View style={container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaProvider>
          <MainTab />
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

export default App;
