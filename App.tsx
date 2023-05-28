import React from 'react'

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './app/navigation';

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar style="auto" />
    </>
  );
}