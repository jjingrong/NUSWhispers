'use strict';
var React = require('react-native');

var {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  DeviceEventEmitter,
  LayoutAnimation,
} = React;

// Mapping of whispersType to String
const mapping = [
  'Featured',
  'Popular',
  'Latest',
  'Favourites'
]

class ScreenWhispers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 0,
    };
  } 
  
  render() {  
    return (
      <View>
        <Text>{mapping[this.props.whispersType]}</Text>
      </View>
    );  
  }
}

module.exports = ScreenWhispers;
