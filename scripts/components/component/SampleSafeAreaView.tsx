//独自定義されたセーフ領域
import React, { Component } from 'react';
import { Props, State } from '../interface/SampleSafeAreaViewInterface';
import { Platform, StatusBar, StyleSheet, SafeAreaView as RNSafeAreaView } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';


export default class SampleSafeAreaView extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
    }
  
    render() {
      const statusBarStyle = this.props.statusBarStyle ?? 'dark';
      return (
        <RNSafeAreaView style={[styles.container, this.props.style]}>
          <ExpoStatusBar style={statusBarStyle} />
          {this.props.children}
        </RNSafeAreaView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
  });