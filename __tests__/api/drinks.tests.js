import { cocktail } from 'api/index'

describe('cocktail API', () => {
    test('it must return an unfiltered set of 10 elements in drink collection', async () => {
        const results = await cocktail.getAllCocktails()

        expect(results).toHaveProperty('data')
        expect(results.data).toHaveProperty('drink')
        expect(Array.isArray(results.data.drink)).toBe(true)
        expect(results.data.drink.length).toBe(10)
    })

    test('it must filter drink collection by %car% and should retrieve 2 elements', async () => {
        const results = await cocktail.getCocktailByName('car')

        expect(results).toHaveProperty('data')
        expect(results.data).toHaveProperty('drink')
        expect(Array.isArray(results.data.drink)).toBe(true)
        expect(results.data.drink.length).toBe(1)
        expect(results.data.drink).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                strDrink: 'Bacardi Cocktail'
              })
            ])
          )
    })

    test('it must filter drink collection by an unknown name and should retrieve nothing', async () => {
        const results = await cocktail.getCocktailByName('some_unexistent_random_name')

        expect(results).toHaveProperty('data')
        expect(results.data).toHaveProperty('drink')
        expect(Array.isArray(results.data.drink)).toBe(true)
        expect(results.data.drink.length).toBe(0)
    })
})
