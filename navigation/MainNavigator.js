import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import SearchScreen from '../screens/SearchScreen';

import HeaderLeft from '../components/HeaderLeft';

import CustomDrawerContentComponent from '../components/CustomDrawerContentComponent';

export default createDrawerNavigator({
  Map: {
    screen: MainScreen,
  },
  Search: { screen: SearchScreen },
  About: MainScreen,
  Tool: MainScreen,
  Terms: MainScreen,
}, {
  drawerWidth: 340,
  drawerPosition: 'right',
  contentComponent: CustomDrawerContentComponent,
});
