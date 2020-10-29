import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "../screens/MainScreen"
import Detail from "../screens/DetailScreen"

import CustomHeader from 'components/CustomHeader'

const Stack = createStackNavigator()

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ Home } options={{ title: '', header: props => <
      // @ts-ignore
      CustomHeader {...props} />}} />
      <Stack.Screen name="Detail" component={ Detail } options={{ title: '' }} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator }