import React from 'react'
import { View, Image, StyleSheet, TextInput, } from 'react-native'

export default class CustomInput extends React.Component {
  state = {
      isFocused: false,
  }

  render() {
    const { icon = null, borderColor = '#000000', containerStyle, onFocus = () => null, ...otherProps } = this.props
    const { isFocused = false, } = this.state
    
    return (
      <View style={ [styles.container, containerStyle ] }>
        {icon && 
          <View>
            <Image style={ [styles.icon ] } source={ icon } />
          </View>
        }
        <View style={ [styles.inputContainer] }>
          <TextInput
            style={ [styles.textInput] }
            placeholderTextColor={ isFocused ? '#ffffff' : '#686a86' }
            autoCapitalize="none"
            underlineColorAndroid="transparent" 
            onFocus={ (text) => {
              if (onFocus) {
                onFocus()
              } else {
                this.setState({...this.state, isFocused: true, })
              }
            } }
            onBlur={ (text) => this.setState({...this.state, isFocused: false, }) }
            {...otherProps}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 23,
    backgroundColor: 'white',
    height: 40,
    borderWidth: 1,
    borderRadius: 12,
  },
  icon: {
    width: 13, 
    height: 13, 
    marginLeft: 8, 
    marginRight: 8, 
    marginTop: 12,
    tintColor: '#686a86',
  },
  inputContainer: {
    flex: 1,
    height: 40,
  },
  textInput: {
    fontSize: 12,
    color: 'black',
    paddingLeft: 0,
    height: 40,
  }
})