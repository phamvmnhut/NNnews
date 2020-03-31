/**
 * NNnews App
 * https://github.com/phamvmnhut/NNnews
 *
 * Item News
 * Cac item trong list bai bao
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';

class ItemNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: '',
    };
  }
  getOrientation = () => {
    if (this.refs.rootView) {
      if (Dimensions.get('window').width < Dimensions.get('window').height) {
        this.setState({orientation: 'portrait'});
      } else {
        this.setState({orientation: 'landscape'});
      }
    }
  };
  componentDidMount() {
    this.getOrientation();
    Dimensions.addEventListener('change', () => {
      this.getOrientation();
    });
  }
  render() {
    const {container, imageStyle, textStyle, rowfoot} = styles;
    const {item} = this.props;
    const TextSize = this.state.orientation !== 'landscape' ? 18 : 24;
    return (
      <TouchableOpacity
        ref="rootView"
        onPress={() => Alert.alert('news item')}
        style={container}>
        <View style={imageStyle}>
          <Text>Image</Text>
        </View>
        <View style={textStyle}>
          <Text style={{fontSize: TextSize}}>{item.title}</Text>
          <View style={rowfoot}>
            <Text style={{color: 'skyblue'}}>{item.auth}</Text>
            <Text>{item.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: 'white',
    marginTop: 12,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: {width: 2, height: 5},
  },
  imageStyle: {
    flex: 2,
    height: (3 / 4) * width * (2 / 5),
    margin: 3,
    backgroundColor: '#25a7db',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textStyle: {
    paddingLeft: 3,
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rowfoot: {
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

export default ItemNews;
