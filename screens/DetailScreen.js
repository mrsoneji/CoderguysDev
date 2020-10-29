import React from 'react'
import { ScrollView, View, Text, StyleSheet, LogBox } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import CachedImage from 'react-native-expo-cached-image'

import { withTheme } from 'react-native-elements'

import IngredientCardCollection from '../components/IngredientCardCollection'

// redux-related imports
import { connect } from 'react-redux'

class DetailScreen extends React.Component {
  constructor(props) {
    super(props);

    LogBox.ignoreAllLogs()
  }
  
  componentDidMount() {

  }

  render() {
    const { ingredients = [], instructions = '', thumb = '' } = this.props
    const { key = '', title = '' } = this.props.route.params
    const { theme } = this.props

    return (
      <ScrollView style={ [styles.scrollContainer, { backgroundColor: theme.Background }] } showsVerticalScrollIndicator={false} >
        <CocktailHeader title={ title } thumb={ thumb }/>

        <Text style={ styles.textIngredients }>Ingredients</Text>

        <IngredientCardCollection style={{ marginTop: 14, }} data={ ingredients }/>

        <Text style={{ fontFamily: 'utmtimesbold', fontSize: 20, fontWeight: 'bold', marginTop: 24, }}>Recipe</Text>
        <Text style={{ fontSize: 14, marginTop: 24, }}>{ instructions }</Text>
      </ScrollView>
    )
  }
}

function CocktailHeader (props) {
  return (
    <View>
      <View style={ styles.headerContainer }>
        <CachedImage source={{ uri: props.thumb } } style={[ styles.image ]} />
      </View>
      <Text style={ styles.textTitle }>{ props.title }</Text>

      <CocktailTimeMeasure time={ 8 } quantity={ 140 }/>
    </View>
  )
}

function CocktailTimeMeasure (props) {
  return (
    <View style={{ flexDirection: 'row', marginTop: 32, }}>
      <Ionicons style={{ marginRight: 12, }} name={ 'ios-time' } size={13} color={'#373737'} />
      <Text style={{ fontSize: 11, marginRight: 12, }}>{ props.time } Mins</Text>
      <Ionicons style={{ marginRight: 12, }} name={ 'ios-wine' } size={13} color={'#373737'} />
      <Text style={{ fontSize: 11, marginRight: 12,  }}>{ props.quantity} ML</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    position: 'relative',
    height: '100%',
    marginHorizontal: 20,
  },
  generalContainer: {
    marginTop: 48,
    alignItems: 'center', 
    flex: 1, 
    marginHorizontal: 20,
  },
  headerContainer: {
    width: 190,
    height: 190, 
    position: 'absolute',
    right: 0,
    marginTop: 40,
  },
  customInputContainer: {
    position: 'relative',
    borderColor: 'white',
    top: 70,
    paddingLeft: 12,
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'stretch',
    borderRadius: 8,
    opacity: 0.4,
  },
  textTitle: {
    fontFamily: 'utmtimesbold',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 78,
  },
  textIngredients: {
    fontFamily: 'utmtimesbold',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 120, 
  }
})

const mapStateToProps = state => {
    return {
      ingredients: state.drink.ingredients,
      instructions: state.drink.instructions,
      thumb: state.drink.thumb,
    }
}

export default connect(mapStateToProps)(withTheme(DetailScreen))
  