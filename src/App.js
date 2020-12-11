import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/common';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Gocho</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});


