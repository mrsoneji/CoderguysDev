export default (state = {}, action) => {
  switch (action.type) {
    case 'STORE_DRINK_LOADING':
      return {
        ...state,
        loading: true
      }

    case 'STORE_DRINK_INGREDIENTS':
      return {
        ...state,
        ingredients: action.ingredients,
        instructions: action.instructions,
        thumb: action.thumb,
        loading: false
      }

    default:
      return { ...state }
  }
}
