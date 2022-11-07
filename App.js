import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Time Series </Text>
      <WebView 
        injectedJavaScriptBeforeContentLoaded={`
          window.onerror = function(message, sourcefile, lineno, colno, error) {
            alert("Message: " + message + " - Source: " + sourcefile + " Line: " + lineno + ":" + colno);
            return true;
          };
          true;
        `}
        source={{ uri: 'http://localhost:8080/' }} 
      />
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
});


class MyWeb extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Time Series </Text>
        <WebView 
          source={{ uri: 'https://kitware.github.io/vtk-js/examples/TimeSeries/index.html' }} 
        />
      </SafeAreaView>
    );
  }
}