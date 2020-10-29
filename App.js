import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// react-navigation-related imports
import { NavigationContainer } from '@react-navigation/native'

// react-native-elements-related imports
import { ThemeProvider } from 'react-native-elements'

import * as Font from 'expo-font'

// screen imports
import DrawerNavigator from './navigation/DrawerNavigator'

// redux-related imports
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'

export const store = createStore(
  reducer,
)

// default theme: light
const theme = {
  Background: '#F9F9F9',
  Foreground: '#FFFFFF',
  Selected: '#F3C24A',
  Unselected: '#FDF3DB',
}

export default class App extends React.Component {
  state = {
    isLoadCompleted: false,
  }

  async componentDidMount() {
    await this._loadAssetsAsync()

    this.setState({...this.state, isLoadCompleted: true })
  }

  async _loadAssetsAsync(){
      await Font.loadAsync({
        // @ts-ignore
        worldwideheadline: require('./assets/fonts/WorldwideHeadline.ttf'),
        // @ts-ignore
        utmtimesbold: require('./assets/fonts/UTMTimesBold.ttf')
      })

      this.setState({...this.state, isLoadCompleted: true })
  }

  render() {
    const { isLoadCompleted } = this.state;

    return (
      <Provider store={store}>
        <View style={ [styles.container, { backgroundColor: theme.Background }] }>
          <NavigationContainer>
            { isLoadCompleted && 
              <ThemeProvider theme={ theme }>
                <DrawerNavigator />
              </ThemeProvider>
            }
          </NavigationContainer>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
