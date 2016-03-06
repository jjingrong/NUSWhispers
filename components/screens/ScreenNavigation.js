'use strict';

var React = require('react-native');
var {
  Text,
  Navigator,
  Platform,
  StyleSheet,
  View,
  Component,
  TouchableHighlight,
  Image,
} = React;

var ScreenTabBarController = require('../screens/ScreenTabBarController')

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var routeStack = []
    routeStack.push({title: 'NUSWhispers', component: ScreenTabBarController})
    return (
      <Navigator
        initialRouteStack={routeStack}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}

        sceneStyle={{paddingTop: (Platform.OS === 'android' ? 56 : 64)}}

        navigationBar={this._renderNavBar()}
      />
    );
  }
  _renderNavBar() {
    var _self = this;
    var routeMapper = {
      LeftButton(route, navigator, index, navState) {
        if (index > 0) {
          return (
            <TouchableHighlight
              style={{paddingHorizontal:20}}
              onPress={()=>{ 
                  navigator.pop()
                }
              }
              underlayColor='rgba(0,0,0,0)'>
              <Image
                source={require('../../assets/arrow-left.png')} 
                style={{height:25, width:25}}
                resizeMode='contain'
              />  
            </TouchableHighlight>
          )
        } else {
          return null
        }
      },
      RightButton(route, navigator, index, navState) {
        if (route.title == 'How it works') {
          return (
            <TouchableHighlight
              style={{paddingHorizontal:25, marginTop:2}}
              onPress={()=>{ 
                  navigator.resetTo({title: 'My Questions', component: ScreenTabBarController})
                }
              }
              underlayColor='rgba(0,0,0,0)'>
              <Text style={styles.genericGreyText}>Skip</Text>
            </TouchableHighlight>
          )
        } else {
          return null
        }
      },
      Title(route, navigator, index, navState) {
        return <Text style={{fontSize: 19, fontWeight: '300', color:'white'}}>{route.title}</Text>;
      }
    };
    return (
      <Navigator.NavigationBar
        style={styles.defaultNavBar}
        routeMapper={routeMapper}
      />
    );
  }
  renderScene(route, navigator) {
    if (route.component) {
      return React.createElement(route.component, Object.assign(
          {},
          { navigator: navigator, changeComponent: this.props.changeComponent },
          (route.passProps != undefined ? route.passProps : {})
        )
      );
    }
  }
};

var styles = StyleSheet.create({
  defaultNavBar: {
    backgroundColor: '#2e8fc2',
    alignItems: 'center',
    justifyContent:'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(85,85,85,0.75)'
  },
  genericGreyText: {
    fontSize: 16,
    fontWeight: '300',
    color: 'rgba(29, 29, 38, 0.4)',
  },
});

Navigation.propTypes = {
  title: React.PropTypes.string,
}

Navigation.defaultProps = {
  title: ''
}

module.exports = Navigation;
