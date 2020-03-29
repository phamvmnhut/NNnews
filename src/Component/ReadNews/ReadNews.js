/**
 * NNnews App
 * https://github.com/phamvmnhut/NNnews
 *
 * Man hinh ReadNews
 * Man hinh chinh doc bao
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ReadNews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {container} = styles;
    return (
      <View style={container}>
        <Text>ReadNews Component</Text>
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
