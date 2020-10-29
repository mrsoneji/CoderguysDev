import axios from 'axios'
// @ts-ignore
import { API_BASE_URL, API_HASURA_PASS } from 'api/constants'

const getIngredientsByDrink = async (drink) => {
  const response = await axios({
    url: API_BASE_URL,
    headers: { 'x-hasura-admin-secret': API_HASURA_PASS },
    method: 'post',
    data: {
      query: `
        query getIngredientsByDrink {
          ingredient(where: {drink_x_ingredients: {idDrink: {_eq: "${drink}"}}}) {
            idIngredient
            strIngredient
          }
          drink(where: {idDrink: {_eq: "${drink}"}}) {
            strInstructions,
            strDrinkThumb
          }
        }
      `
    }
  })

  return response.data
}

// fault-tolerant api call
const getAllIngredients = async () => {
  const response = await axios({
    url: API_BASE_URL,
    headers: {'x-hasura-admin-secret': API_HASURA_PASS },
    method: 'post',
    data: {
      query: `
        query getAllIngredients {
            ingredient {
            idIngredient
            strIngredient
            }
        }
      `
    }
  })
  
  return response.data
}

export default {
  getAllIngredients,
  getIngredientsByDrink,
}
