'use strict';

window.navigator.userAgent = "react-native";

var React = require('react-native');
var {
  AppRegistry
} = React;

AppRegistry.registerComponent('NUSWhispers', () => require('./components/screens/ScreenNavigation'));
