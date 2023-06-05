import React from 'react'
import { LogBox } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './app/store'

import { StatusBar } from 'expo-status-bar';
import RootNavigator from './app/navigation';

export default function App() {
  LogBox.ignoreAllLogs();
  
  return (
    <>
      <Provider store={store}>
        <RootNavigator />
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}