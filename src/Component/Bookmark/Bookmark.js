/**
 * NNnews App
 * https://github.com/phamvmnhut/NNnews
 *
 * Man hinh bookmark
 * Cac bookmark da luu
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Bookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {container} = styles;
    return (
      <View style={container}>
        <Text>Bookmark Component</Text>
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
