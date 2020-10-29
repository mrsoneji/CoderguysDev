import React from 'react'

// react native-related components
import { View, LogBox, StyleSheet, Text, TouchableHighlight } from 'react-native'
import AsyncImage from '../components/AsyncImage'
import CachedImage from 'react-native-expo-cached-image'

export default class CocktailCardItem extends React.Component {
    constructor(props) {
        super(props);
    
        LogBox.ignoreAllLogs();
    }

    render() {
        const { 
            title = '',
            backgroundColor = 'red',
            imageUri = '',
            id = '',
            onPress = () => {}
        } = this.props

        return (
            <TouchableHighlight onPress={ () => onPress({ id, title }) } style={ [ styles.container, { backgroundColor } ] }>
                <View style={ styles.innerContainer }>
                    <CachedImage source={{ uri: imageUri } } style={[ styles.image ]} />
                    <Text style={ styles.text }>{ title }</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        width: '48%',
        margin: '1%',
        height: 100,
        aspectRatio: 1,
        borderRadius: 8,
        borderColor: '#ffffff',
        borderWidth: 0,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    innerContainer: {
        height: 162,
    },
    text: {
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 18,
        marginLeft: 8,
        width: 100
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
