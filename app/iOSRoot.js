'use strict';

import React from 'react-native';
const {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  WebView,
} = React;

import SoilTabBars from './pages/SoilTabBars';
var {
  iosMajorItemInfos: majorItemInfos
} = require('../string.json');

class iOSRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'soilTab',
      notifCount: 0,
      presses: 0,
    };
  }

  _renderContent(color: string, pageText: string, num?: number) {
    return (
        <View style={[styles.tabContent, {backgroundColor: color}]}>
            <Text style={styles.tabText}>{pageText}</Text>
            <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
        </View>
    );
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title={majorItemInfos[0].name}
          icon={{uri: majorItemInfos[0].base64, scale: 4.5}}
          selected={this.state.selectedTab === 'soilTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'soilTab',
            });
        }}>
          <SoilTabBars />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={majorItemInfos[1].name}
          icon={{uri: majorItemInfos[1].base64, scale: 4.5}}
          selected={this.state.selectedTab === 'weatherTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'weatherTab',
            });
          }}>
          <SoilTabBars />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={majorItemInfos[2].name}
          icon={{uri: majorItemInfos[2].base64, scale: 4.5}}
          selected={this.state.selectedTab === 'videoTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'videoTab',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={majorItemInfos[3].name}
          icon={{uri: majorItemInfos[3].base64, scale: 4.5}}
          selected={this.state.selectedTab === 'diseaseTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'diseaseTab',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
            title={majorItemInfos[4].name}
            icon={{uri: majorItemInfos[4].base64, scale: 4.5}}
            selected={this.state.selectedTab === 'settingTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'settingTab',
                presses: this.state.presses + 1
              });
            }}>
            {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  logo: {
    width: 10,
    height: 10,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  webview_style:{
    backgroundColor:'#000000',
  }
});

export default iOSRoot;