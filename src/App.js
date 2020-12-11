import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentDidMount() {
    if (firebase.auth.length === 0) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDrHwAcqNL6a5QEK1yIfAzs2XKO5B_BuSE',
        authDomain: 'authentication-8f993.firebaseapp.com',
        projectId: 'authentication-8f993',
        storageBucket: 'authentication-8f993.appspot.com',
        messagingSenderId: '576857196351',
        appId: '1:576857196351:web:efab1904aad1e9e0b2f58a',
      });
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
