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

var ScrollableTabView = require('react-native-scrollable-tab-view');
var TabBar = require('../UI/TabBar');

class ScreenTabBarController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 1,
    };
  } 
  
  render() {  
    return (
      <ScrollableTabView
        renderTabBar={() => <TabBar navigator={this.props.navigator} />}
        tabBarPosition='bottom'
        initialPage={this.state.defaultTab}
        locked={true}
        tabBarActiveTextColor='#fff819'
        backgroundColor='#2e8fc2'
        tabBarInactiveTextColor='white'
        tabBarUnderlineColor='rgba(0, 0, 0, 0)'
        >
        <View navigator={this.props.navigator} tabLabel="Feed"/>
        <View navigator={this.props.navigator} tabLabel="Post" />
        <View navigator={this.props.navigator} tabLabel="Search" />
        <View navigator={this.props.navigator} tabLabel="Options" />
      </ScrollableTabView>
    );  
  }
}

module.exports = ScreenTabBarController;
