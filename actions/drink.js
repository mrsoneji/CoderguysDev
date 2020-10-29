export const STORE_DRINK_INGREDIENTS = 'STORE_DRINK_INGREDIENTS'
export const STORE_DRINK_LOADING = 'STORE_DRINK_LOADING'

export const drinkLoading = () => ({
  type: STORE_DRINK_LOADING,
})

export const drinkLoaded = (ingredients, drink) => ({
  type: STORE_DRINK_INGREDIENTS,
  ingredients: ingredients,
  instructions: drink.strInstructions,
  thumb: drink.strDrinkThumb
})
