var React = require('react-native')
var {
  ActivityIndicatorIOS,
  StyleSheet,
  View,
  Text,
  Component,
} = React

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          justifyContent: 'space-around',
          alignItems:'center',
          flexDirection: this.props.direction,
          margin: 50,
          height: 70,
          }}>
          <Text style={{fontWeight: '300', fontSize:this.props.fontSize, color:this.props.color}}>Loading {this.props.children}</Text>
          <ActivityIndicatorIOS 
            style={{alignSelf: 'center'}} 
            size={this.props.size}
            />
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {

  },
})

Loading.propTypes = {
  fontSize: React.PropTypes.number,
  size: React.PropTypes.string,
}

Loading.defaultProps = {
  fontSize: 16,
  size: 'large',
}

module.exports = Loading
