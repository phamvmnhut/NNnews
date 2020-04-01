/**
 * NNnews App
 * https://github.com/phamvmnhut/NNnews
 *
 * Man hinh ReadNews
 * Man hinh chinh doc bao
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';

import Header from './Header';

export default class ReadNews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {container} = styles;
    const {url} = this.props.route.params;
    return (
      <View style={{flex: 1}}>
        <Header {...this.props} />
        <View style={{flex: 1}}>
          <WebView
            source={{uri: url}}
            style={container}
            onError={(syntheticEvent) => {
              const {nativeEvent} = syntheticEvent;
              console.warn('WebView error: ', nativeEvent);
            }}
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
    alignItems: 'center',
  },
});
