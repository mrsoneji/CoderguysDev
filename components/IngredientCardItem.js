import React from 'react'

// react native-related components
import { View, LogBox, StyleSheet, Text, TouchableHighlight } from 'react-native'

import { withTheme } from 'react-native-elements'

function IngredientCardItem(props) {
    return (
        <View>
            <TouchableHighlight style={ [ styles.container, { borderColor: props.theme.Foreground }] }><View></View></TouchableHighlight>
            <Text style={ [styles.text, { color: props.theme.Foreground }] }>{ props.title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        height: 75,
        width: 75,
        marginRight: 24, 
        borderRadius: 8,
        borderWidth: 1,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    innerContainer: {
        height: 162,
    },
    text: {
        fontSize: 11,
        marginTop: 8,
        marginLeft: 4,
        width: 64
    },
    image: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        resizeMode: 'cover',
        borderRadius: 8,
        opacity: 0.4,
    }
})

export default withTheme(IngredientCardItem)
