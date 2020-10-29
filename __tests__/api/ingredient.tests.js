import { ingredient } from 'api/index'

describe('ingredient API', () => {
    test('it must return an unfiltered set of 29 elements in ingredient collection', async () => {
        const results = await ingredient.getAllIngredients()

        expect(results).toHaveProperty('data')
        expect(results.data).toHaveProperty('ingredient')
        expect(Array.isArray(results.data.ingredient)).toBe(true)
        expect(results.data.ingredient.length).toBe(29)
    })

    test('it must filter drink collection by UUID and should retrieve 2 elements', async () => {
        const results = await ingredient.getIngredientsByDrink('35dcfcc1-a29d-405e-8f5c-7c4e0bcb4d9f')

        expect(results).toHaveProperty('data')
        expect(results.data).toHaveProperty('ingredient')
        expect(Array.isArray(results.data.ingredient)).toBe(true)
        expect(results.data.ingredient.length).toBe(4)
        expect(results.data.ingredient).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                strIngredient: 'Strawberry liqueur'
              })
            ])
          )
    })

    test('it must filter ingredient collection by an unexistent drink and retrieve nothing', async () => {
        const results = await ingredient.getIngredientsByDrink('00dcfcc1-a29d-405e-8f5c-7c4e0bcb4d00')

        expect(results).toHaveProperty('data')
        expect(results.data).toHaveProperty('ingredient')
        expect(Array.isArray(results.data.ingredient)).toBe(true)
        expect(results.data.ingredient.length).toBe(0)
    })

    test('it must filter ingredient collection by an invalid value and return error', async () => {
        const results = await ingredient.getIngredientsByDrink('some_invalid_value')

        expect(results).toHaveProperty('errors')
        expect(Array.isArray(results.errors)).toBe(true)
    })
})
