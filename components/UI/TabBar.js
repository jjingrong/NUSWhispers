'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Component,
  Image,
} = React;

// Hard 1-to-1 matching of names to assets in order
const iconList = [
  require('../../assets/tab_feed.png'),
  require('../../assets/tab_post.png'),
  require('../../assets/tab_search.png'),
  require('../../assets/tab_account.png')
]

class TabBar extends Component {
  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;
    var activeTextColor = this.props.activeTextColor || "navy";
    var inactiveTextColor = this.props.inactiveTextColor || "black";
    return (
      <TouchableOpacity style={[styles.tab]} key={name} onPress={() => this.navigationBarButtonSelected(name, page)}>
        <View style={{flex:1, justifyContent:'space-around'}}>
          <Image 
            source={iconList[page]}
            style={isTabActive ? styles.tabSelectedIcon : styles.tabIcon}
            />
          <Text style={{color: isTabActive ? activeTextColor : inactiveTextColor,
            fontWeight: isTabActive ? 'bold' : 'normal'}}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    var containerWidth = this.props.containerWidth;
    var numberOfTabs = this.props.tabs.length;
    var tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 4,
      backgroundColor: this.props.underlineColor || "navy",
      bottom: 0,
    };

    var left = this.props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0,  containerWidth / numberOfTabs]
    });

    return (
      <View style={[styles.tabs, {backgroundColor : '#2e8fc2'}]}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        <Animated.View style={[tabUnderlineStyle, {left}]} />
      </View>
    );
  }
  
  navigationBarButtonSelected(name, page) {
    /*
    * This code purpose was to change the text is navigation bar but it causes heavy frame rate loss
    * As such, a temporary workaround is set to have a standard text in tabbarcontroller's navigator for now
    
    var route = this.props.navigator.navigationContext.currentRoute;
    const titleTranslate = {
      'Ask' : 'New Question',
      'Feed' : 'My Questions',
      'Promotion' : 'Promotion',
      'Options' : 'Options',
    }
    route.title = titleTranslate[name];
    this.props.navigator.replace(route);
    
    */
    this.props.goToPage(page)
  }
}



var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 3,
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopColor: 'rgba(204,204,204,0.8)',
  },
  tabIcon: {
    height: 24,
    width: 24,
    alignSelf: 'center',
    marginBottom: 2,
    tintColor: 'white',
  },
  tabSelectedIcon: {
    tintColor: '#fff819',
    height: 24,
    width: 24,
    alignSelf: 'center',
    marginBottom: 2
  },
});

TabBar.propTypes= {
  goToPage: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.array,
  underlineColor : React.PropTypes.string,
  backgroundColor : React.PropTypes.string,
  activeTextColor : React.PropTypes.string,
  inactiveTextColor : React.PropTypes.string,
},

module.exports = TabBar;
