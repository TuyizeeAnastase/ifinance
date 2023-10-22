import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './components/Navigation/stackNavigator';
import DrawerNavigator from './components/Navigation/drawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

