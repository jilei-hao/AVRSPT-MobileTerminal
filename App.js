import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react'
import { StyleSheet, Text, SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';
import config from './server-config.json'

export default function App() {
  const rootURL = `http://${config.host}:${config.port}`;

  const [viewURL, setViewURL] = useState(`${rootURL}`);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: viewURL }} style={{ flex: 1 }}/>
    </SafeAreaView>
  );
};