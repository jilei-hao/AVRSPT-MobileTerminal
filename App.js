import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View, Button, Pressable} from 'react-native';
import { WebView } from 'react-native-webview';
import config from './server-config.json'

export default function App() {
  const rootURL = `http://${config.host}:${config.port}`;

  const [viewURL, setViewURL] = useState(`${rootURL}`);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: viewURL }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_control: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  main_pressable: {
    justifyContent: 'center',
    backgroundColor: '#d9d9d9',
    padding: 10,
    marginHorizontal: 10,
    height: 70,
    width: 100,
    borderRadius: 10,
  },
  button_text: {
    textAlign: 'center',
    fontSize: 25,
  }
  
});