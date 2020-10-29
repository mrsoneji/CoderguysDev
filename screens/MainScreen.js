import React from 'react'
import { ScrollView, View, Text, StyleSheet, LogBox, Alert } from 'react-native'

import CustomInput from '../components/CustomInput'
import CocktailCardCollection from '../components/CocktailCardCollection'

import { TagSelect } from 'react-native-tag-select'

import { withTheme } from 'react-native-elements'

// api-related imports
import { cocktail, ingredient } from '../api/index'

// redux-related imports
import { drinkLoaded, drinkLoading } from '../actions/drink'
import { connect } from 'react-redux'

class MainScreen extends React.Component {
  state = {
    cocktails: [],
    tags: [
      { id: 1, label: 'Alcoholic', selected: true },
      { id: 2, label: 'Non-alcoholic' },
      { id: 3, label: 'Classic' }
    ],
    key: '',
    title: ''
  }

  constructor(props) {
    super(props)

    LogBox.ignoreAllLogs()
  }
  
  componentDidMount() {
    cocktail.getAllCocktails().then(data => {
      const { data: { drink = [] }} = data
      this.setState({ cocktails: drink })
    })
  }

  componentDidUpdate(nextProps) {
    if (nextProps.ingredients) {
      
    }
  }

  onSearch = async ( term ) => {
    this.setState({ ...this.state, term })

    cocktail.getCocktailByName(term).then(data => {
      const { data: { drink = [] }} = data
      this.setState({ cocktails: drink })
    })
  }

  onCardPress = async ({ id, title }) => {
    this.setState({id, title})
    const results = await ingredient.getIngredientsByDrink(id)
    this.props.drinkLoaded(results.data.ingredient, results.data.drink[0])
    this.props.navigation.navigate('Detail', { id: this.state.id, title: this.state.title })
  }

  render() {
    const { theme } = this.props

    return (
      <ScrollView style={ [styles.container, { backgroundColor: theme.Background }] } showsVerticalScrollIndicator={false} >
        <CustomInput 
          icon={ require('../assets/images/63322.png') }
          containerStyle={ [styles.customInputContainer, { backgroundColor: theme.SearchBar }] }
          borderColor='#25AAE1'
          placeholder="Search Cocktails..."
          onChangeText={ term => this.onSearch(term) } 
          value={ this.state.term }
        />
        <View>
          <TagSelect
            data={ this.state.tags }
            max={3}
            ref={(tag) => {
              this.tag = tag
            }}
            itemStyle={{ borderRadius: 18, backgroundColor: theme.SearchBar }}
            itemLabelStyle={{ fontSize: 9, color: theme.Foreground }}
            itemStyleSelected={{ backgroundColor: 'red', borderWidth: 0 }}
            itemLabelStyleSelected={{ color: 'black',  }}
            onMaxError={() => {
              Alert.alert('Ops', 'Max reached')
            }}
          />
        </View>
        <Text style={ [styles.title, { color: theme.Foreground }] }>Famous Cocktails</Text>
        <CocktailCardCollection onPress={ this.onCardPress } style={ styles.cocktailCardCollection } data={ this.state.cocktails }/>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 14,
    padding: 24, 
  },
  title: { 
    fontFamily: 'utmtimesbold', 
    fontSize: 36, 
    fontWeight: 'bold', 
    marginTop: 24, 
  },
  generalContainer: {
    marginTop: 48,
    alignItems: 'center', 
    flex: 1, 
    marginHorizontal: 20,
  },
  customInputContainer: {
    marginVertical: 28, 
    borderColor: 'white',
    paddingLeft: 12,
  },
  cocktailCardCollection: {
    marginTop: 14, 
  },
})

const mapStateToProps = state => {
  return {
    ingredients: state.drink.ingredients,
    loading: state.drink.loading,
  }
}

const mapDispatchToProps = dispatch => ({
  // @ts-ignore
  drinkLoaded: (...params) => dispatch(drinkLoaded(...params)),
  drinkLoading: () => dispatch(drinkLoading()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(MainScreen))
