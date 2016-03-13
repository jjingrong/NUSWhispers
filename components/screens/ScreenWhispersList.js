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

// Helper Components
const GlobalMethods = require('../global/helperMethods')

// UI Components
const Loading = require('../UI/Loading')

// Mapping of whispersType to API end point
const _api_mapping = [
  'http://www.nuswhispers.com/api/confessions/',
  'http://www.nuswhispers.com/api/confessions/popular/',
  'http://www.nuswhispers.com/api/confessions/recent/',
  'http://www.nuswhispers.com/api/confessions/favourites/'
]

class ScreenWhispersList extends Component {
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
    // Loading Confessions
    if (this.props.whispersType == 3) {
      // favourites require logged in user
      return (
        <Text> Please log in first </Text>
      )
    } else if (!this.state.loaded) {
      return (
        <Loading/>
      )
    } else {
      return (
        <ListView
          style={{flex:1}}
          dataSource={this.state.dataSource}
          renderRow={this.renderConfession.bind(this)}
        />
      )
    }
  }
  
  // Render method for each confession
  renderConfession(confession) {
    return (
      <View>
        <Text>
          {confession.confession_id}
        </Text>
      </View>
    )
  }
  
  // API call
  loadData() {
    /**
      * Temporary work around till we login live
    */
    if (this.props.whispersType == 3) return
    
    
    // Update time stamp & offset
    this.setState({
      timestamp : Date.now()
    })
    var currentOffset = this.state.offset
    
    var API_URL = _api_mapping[this.props.whispersType] + '?timestamp=' + this.state.timestamp + '&count=10&offset=' + this.state.offset
    fetch(API_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(GlobalMethods.arrToObject(responseData.data.confessions)),
          loaded: true,
          offset: currentOffset + 10
        });
      })
      .done();
  }
}

module.exports = ScreenWhispersList;
