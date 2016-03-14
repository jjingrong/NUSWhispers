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
        <Text>
          {this.props.confession.confession_id}
        </Text>
        <Text>
          {this.props.confession.content}
        </Text>
      </View>
    );  
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
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 1,
      width: 0,
    }
  },
});



module.exports = WhispersListCell;
