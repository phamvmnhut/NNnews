/**
 * NNnews App
 * https://github.com/phamvmnhut/NNnews
 *
 * Man hinh Setting
 * Cac cai dat cho nguoi dung
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {container} = styles;
    return (
      <View style={container}>
        <Text>Setting Component</Text>
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
