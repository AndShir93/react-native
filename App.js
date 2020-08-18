import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Content from './components/content'
import reducers from './redux/reducers'
import { createStore } from 'redux'
import initialState from './redux/initialState'
import { Provider } from 'react-redux'

const store = createStore(reducers, initialState())

export default function App() {
  return (
    <Provider store={store} style={styles.container}>
      <Content/>
    </Provider>
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
