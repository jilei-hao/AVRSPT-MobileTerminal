import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View, Button, Pressable} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [viewURL, setViewURL] = useState('http://10.102.165.25:5173')

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Time Series </Text>
      <WebView source={{ uri: viewURL }} />
      <View style={styles.main_control}>
        <Pressable style={styles.main_pressable}
          onPress={() => setViewURL('http://10.102.165.25:5173')}
          >
          <Text>Menu</Text>
        </Pressable>
        <Pressable style={styles.main_pressable}
          onPress={() => setViewURL('http://10.102.165.25:5173/model')}
          >
          <Text>Model</Text>
        </Pressable>
        <Pressable style={styles.main_pressable}
          onPress={() => setViewURL(
            'https://kitware.github.io/vtk-js/examples/MultiSliceImageMapper/index.html'
            )}
          >
          <Text>Slices</Text>
        </Pressable>
        <Pressable style={styles.main_pressable}
          onPress={() => setViewURL(
            'https://kitware.github.io/vtk-js/examples/VolumeMapperBlendModes/index.html'
            )}
          >
          <Text>Volume</Text>
        </Pressable>
      </View>
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
    backgroundColor: '#d9d9d9',
    padding: 10,
    marginHorizontal: 10,
  }
  
});