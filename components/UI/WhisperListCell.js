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
  ScrollView,
  Dimensions,
  DeviceEventEmitter,
  LayoutAnimation,
} = React;

class WhispersListCell extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  } 
  
  render() {  
    return (
      <View style={styles.parentContainer}>
        {this.renderHeaderView()}
        {this.renderTextView()}
        {this.renderStatsView()}
      </View>
    );  
  }
  
  /* Helper component renderers */
  renderHeaderView() {
    return (
      <View style={styles.headerViewContainer}>
        <Text>
          {this.props.confession.confession_id}
        </Text>
      </View>
    )
  }

  renderTextView() {
    return (
      <View style={styles.textViewContainer}>
        <Text>
          {this.props.confession.content}
        </Text>
      </View>
    )
  }

  renderStatsView() {
    return (
      <View style={styles.statsViewContainer}>
        <Text>
          {this.props.confession.fb_like_count}
        </Text>
        <Text>
          {this.props.confession.fb_comment_count}
        </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  parentContainer: {
    alignSelf:'stretch',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: {
      height: 1,
      width: 0,
    }
  },

  textViewContainer: {
    
  },
  
  statsViewContainer: {
    borderTopWidth: 1,
    borderTopColor: '#fcfcfc',
    flexDirection:'row',
    justifyContent:'space-between'
  }

});



module.exports = WhispersListCell;
