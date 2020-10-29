import React, { useState } from "react"

import { SafeAreaView, Image, Switch } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Ionicons from '@expo/vector-icons/Ionicons'
import { withTheme } from "react-native-elements"

function CustomHeader(props) {
    const { updateTheme } = props
    const insets = useSafeAreaInsets()
    const [ isActive, setActive ] = useState(false)
  
    const toggleTrueFalse = () => {
      if (isActive) {
        updateTheme({ Background: '#F9F9F9', Foreground: '#373737', Selected: '#F3C24A', CurrentTab: '#FDF3DB', SearchBar: '#FFFFFF' })
      } else {
        updateTheme({ Background: '#2B2B2B', Foreground: '#FFFFFF', Selected: '#F3C24A', CurrentTab: '#F3C24A', SearchBar: '#373737' })
      }
      setActive(!isActive)
    }
  
    return (
      <SafeAreaView style={{ paddingTop: insets.top, height: 84, }}>
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

  export default withTheme(CustomHeader)
  