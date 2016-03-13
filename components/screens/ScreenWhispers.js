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
  ListView,
  TextInput,
  ScrollView,
  Dimensions,
  DeviceEventEmitter,
  LayoutAnimation,
} = React;

// UI Components
const Loading = require('../UI/Loading')

// Mapping of whispersType to API end point
const _api_mapping = [
  'http://www.nuswhispers.com/api/confessions/',
  'http://www.nuswhispers.com/api/confessions/popular/',
  'http://www.nuswhispers.com/api/confessions/recent/',
  'http://www.nuswhispers.com/api/confessions/favourites/'
]

class ScreenWhispers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      timestamp : Date.now(),
      offset: 0, 
      loaded : false
    };
  } 
  
  componentDidMount() {
    this.loadData();
  }
  
  render() {  
    // Loading questions
    if (!this.state.loaded) {
      return (
        <Loading>Questions . .</Loading>
      )
    } else {
      return (
        <View>
          <Text>{_api_mapping[this.props.whispersType] + '?timestamp=' + this.state.timestamp + '&count=10&offset=' + this.state.offset}</Text>
        </View>
      )
    }
  }
  
  // API call
  loadData() {
    // Update time stamp
    this.setState({
      timestamp : Date.now()
    })
    var currentOffset = this.state.offset
    
    var API_URL = _api_mapping[this.props.whispersType] + '?timestamp=' + this.state.timestamp + '&count=10&offset=' + this.state.offset
    fetch(API_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
          offset: currentOffset + 10
        });
      })
      .done();
  }
}

module.exports = ScreenWhispers;
