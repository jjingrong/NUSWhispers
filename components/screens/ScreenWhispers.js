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

// Mapping of whispersType to API end point
var _api_mapping = [
  'http://www.nuswhispers.com/api/confessions/?timestamp=1457257656&count=10&offset=0',
  'http://www.nuswhispers.com/api/confessions/popular/?timestamp=1457257656&count=10&offset=0',
  'http://www.nuswhispers.com/api/confessions/recent/?timestamp=1457257656&count=10&offset=0',
  'http://www.nuswhispers.com/api/confessions/favourites/?timestamp=1457257656&count=10&offset=0'
]

class ScreenWhispers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp : Date.now()
    };
  } 
  
  render() {  
    return (
      <View>
        <Text>{_api_mapping[this.props.whispersType]}</Text>
      </View>
    );  
  }
}

module.exports = ScreenWhispers;
