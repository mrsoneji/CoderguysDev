import React, { useState } from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { SafeAreaView, Image, Switch } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Home from "../screens/MainScreen"
import Detail from "../screens/DetailScreen"

import Ionicons from '@expo/vector-icons/Ionicons'

const Stack = createStackNavigator()

function CustomHeader() {
  const insets = useSafeAreaInsets()
  const [ isActive, setActive ] = useState(false)

  const toggleTrueFalse = () => setActive(!isActive)

  return (
    <SafeAreaView style={{ paddingTop: insets.top, }}>
      <Ionicons name={ 'ios-menu' } size={16} color={'#373737'} style={{ marginLeft: 18, marginTop: 6, }} />
      <Switch
        trackColor={{ false: '#F3C24A', true: '#F3C24A' }}
        thumbColor={ '#f5dd4b' }
        ios_backgroundColor='#3e3e3e'
        style={{ position: 'absolute', top: insets.top, right: 62, transform:[{ scaleX: .5 }, { scaleY: .5 }] }}
        onValueChange={ toggleTrueFalse }
        value={ isActive }
      />
      <Image style={{ position: 'absolute', right: 22, width: 18, height: 18, top: insets.top + 6, }} source={ require('../assets/images/avatar.png') }></Image>
    </SafeAreaView>
  )
}

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