import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class AsyncImage extends Component {

  constructor(props) {
    super(props)
    this.state = { loaded: false }
  }

  render() {
    const {
      placeholderColor,
      style,
      source
    } = this.props

    return (
      <View
        style={style}>

        <Image
          source={source}
          resizeMode={'contain'}
          style={[
            style,
            {
              position: 'absolute',
              resizeMode: 'contain'
            }
          ]}
          onLoad={this._onLoad} />

          {!this.state.loaded &&
            <View
              style={[
                style,
                {
                  backgroundColor: placeholderColor || '#90a4ae',
                  position: 'absolute'
                }
              ]} />
          }

      </View>
    )
  }

  _onLoad = () => {
    // This only exists so the transition can be seen
    // if loaded too quickly.
    setTimeout(() => {
      this.setState(() => ({ loaded: true }))
    }, 1000)
  }
}
