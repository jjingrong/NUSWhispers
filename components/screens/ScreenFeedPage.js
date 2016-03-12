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

class ScreenTabBarController extends Component {
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
        <View navigator={this.props.navigator} tabLabel="Featured"/>
        <View navigator={this.props.navigator} tabLabel="Popular" />
        <View navigator={this.props.navigator} tabLabel="Latest" />
        <View navigator={this.props.navigator} tabLabel="Favourites" />
      </ScrollableTabView>
    );  
  }
}

module.exports = ScreenTabBarController;
