import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import BottomTabNavigator from './navigation/BottomTabNavigator';
import React from 'react';
export default class App extends React.Component {
  render() {
    return (
      <BottomTabNavigator />
    );
  }
}