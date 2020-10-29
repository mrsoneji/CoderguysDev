import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigator from '../navigation/BottomTabNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={ BottomTabNavigator } />
    </Drawer.Navigator>
  )
}
export default DrawerNavigator