import React from 'react'
import renderer from 'react-test-renderer'
import CocktailCardItem from '../../components/CocktailCardItem'
import CachedImage from 'react-native-expo-cached-image'

describe('CocktailCardItem', () => {
  test('renders correctly', () => {
    jest.mock('react-native-expo-cached-image', () => 'Image')
    const tree = renderer.create(<CocktailCardItem title={ 'Pina Colada' } />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
