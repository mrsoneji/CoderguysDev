import axios from 'axios'
// @ts-ignore
import { API_BASE_URL, API_HASURA_PASS } from 'api/constants'

const getCocktailByName = async (term) => {
  const response = await axios({
    url: API_BASE_URL,
    headers: { 'x-hasura-admin-secret': API_HASURA_PASS },
    method: 'post',
    data: {
      query: `
        query getCocktailByName {
          drink(where: {strDrink: {_ilike: "%${term}%"}}) {
            idDrink
            strDrink
            strDrinkThumb
            strInstructions
          }
        }
      `
    }
  })

  return response.data
}

// fault-tolerant api call
const getAllCocktails = async () => {
  const response = await axios({
    url: API_BASE_URL,
    headers: {'x-hasura-admin-secret': API_HASURA_PASS },
    method: 'post',
    data: {
      query: `
        query getAllCocktails {
          drink {
            idDrink
            strDrink
            strDrinkThumb
            strInstructions
          }
        }
      `
    }
  })
  
  return response.data
}

export default {
  getAllCocktails,
  getCocktailByName,
}
