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

const ScrollableTabView = require('react-native-scrollable-tab-view');

// Screens
const ScreenWhispersList = require('./ScreenWhispersList')

class ScreenFeedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 0,
    };
  } 
  
  render() {  
    return (
      <ScrollableTabView
        initialPage={this.state.defaultTab}
        // locked={true}
        tabBarActiveTextColor='rgba(10,10,10,0.9)'
        // backgroundColor='#2e8fc2'
        tabBarInactiveTextColor='#bbbbbb'
        tabBarUnderlineColor='#2e8fc2'
        >
        <ScreenWhispersList navigator={this.props.navigator} whispersType={0} tabLabel="Featured"/>
        <ScreenWhispersList navigator={this.props.navigator} whispersType={1} tabLabel="Popular" />
        <ScreenWhispersList navigator={this.props.navigator} whispersType={2} tabLabel="Latest" />
        <ScreenWhispersList navigator={this.props.navigator} whispersType={3} tabLabel="Favourites" />
      </ScrollableTabView>
    );  
  }
}

module.exports = ScreenFeedPage;
