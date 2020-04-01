/**
 * NNnews App
 * https://github.com/phamvmnhut/NNnews
 *
 * Thanh Header
 * Quay lai man hinh truoc
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Color from '../../Constant/Color/Color';

export default class ReadNews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {container} = styles;
    return (
      <View style={container}>
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: Color.header,
    height: 40,
    width: width,
  },
});
