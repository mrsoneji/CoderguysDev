// import React module
import React from 'react'

// react native-related components
import { ScrollView, LogBox, StyleSheet, View, Text} from 'react-native'

// components
import IngredientCardItem from './IngredientCardItem'

export default class IngredientCardCollection extends React.Component {
    constructor(props) {
        super(props);
    
        LogBox.ignoreAllLogs()
    }

    render() {
        return (
            <ScrollView style={ [styles.container, this.props.style] } horizontal={ true }>
                { this.props.data.map(item => {
                    return (<IngredientCardItem key={ item.idIngredient } title={ item.strIngredient } />) 
                })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap', }
})
