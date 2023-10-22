// navigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library of your choice

const Drawer = createDrawerNavigator();

import AboutScreen from '../static/AboutScreen';
import ContactScreen from '../static/ContactScreen';
import WelcomePage from '../welcomePage';
import HomeDashboard from '../dashboard/home';
import Registration from '../registrationPage';

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen
    name='Home'
    component={WelcomePage}
    options={{
      drawerLabel: 'Home',
      drawerIcon: ({ focused, color, size }) => (
        <Icon name="info" size={size} color={color} />
      ),
    }}
    />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerLabel: 'About',
          drawerIcon: ({color, size }) => (
            <Icon name="info" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          drawerLabel: 'Contact',
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="phone" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
