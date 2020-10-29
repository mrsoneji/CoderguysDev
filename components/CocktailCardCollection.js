// import React module
import React from 'react'

// react native-related components
import { View, LogBox, StyleSheet } from 'react-native'

// components
import CocktailCardItem from './CocktailCardItem'

export default class CocktailCardCollection extends React.Component {
    constructor(props) {
        super(props);
    
        LogBox.ignoreAllLogs()
    }

    render() {
        return (
            <View style={ [styles.container, this.props.style] }>
                { this.props.data.map(item => <CocktailCardItem onPress={ this.props.onPress } key={ item.idDrink } id={ item.idDrink } title={ item.strDrink } imageUri={ item.strDrinkThumb } backgroundColor={'#ffffff'} />) }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap', }
})
