import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainStackNavigator } from '../navigation/MainStackNavigator'

import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName

    switch (route.name) {
      case 'Home': iconName = 'ios-home'; break
      case 'Detail': iconName = 'ios-list-box'; break
      case 'Settings': iconName = 'ios-cog'; break
      default: iconName = 'ios-home'; break
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={13} color={'#373737'} />
  }
})

const BottomTabNavigator = () => {
    return (
    <Tab.Navigator tabBarOptions={ tabBarOptions } screenOptions={ screenOptions }>
      <Tab.Screen name='Home' component={ MainStackNavigator } />
      <Tab.Screen name='Detail' component={ MainStackNavigator } />
      <Tab.Screen name='Settings' component={ MainStackNavigator } />
    </Tab.Navigator>
  )
}

const tabBarOptions = {
  showLabel: true,
  activeBackgroundColor:'#FDF3DB',
  labelPosition: 'beside-icon',
  tabStyle: { borderRadius: 15, padding: 15, width:90 },
  labelStyle: { color: 'black', fontSize: 10 }
}

export default BottomTabNavigator