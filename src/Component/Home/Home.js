/**
 * NNnews App
 * https://github.com/phamvmnhut/NNnews
 *
 * Man hinh home
 * Luot danh sach cac bai bao
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {container} = styles;
    console.log('Hello');
    return (
      <View style={container}>
        <Text>Home Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
