import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from 'components/MyComponent';

export interface Props {
  name: string
  enthusiasmLevel?: number
}

interface State {
  enthusiasmLevel: number
}

export default class App extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <MyComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
