# Code Challenge


## Overview:

Implement a simple mobile cocktails catalogue (Master / Detail). The catalogue consists of a table view list of cocktails with their name, toppings and photo. Once the user taps on a specific row it will push a new screen with that drink’s details: Name, Photo, Ingredients and Preparation.


## Schema:

GraphQL connection details: 

- URL: http://104.131.49.160/v1/graphql
- Hasura pass: 6X7L6j4HF4ekAN2D

```
drink {
  idDrink               → Cocktail ID
  strDrink              → Cocktail name
  strDrinkThumb         → Photo URL
  strInstructions       → Cocktail instructions
  drink_x_ingredients   → Drink & Ingredient – Junction Table
}
```

```
ingredient {
  idIngredient          → Ingredient ID
  strIngredient         → Ingredient name
  drink_x_ingredients   → Cocktail & Ingredient – Junction Table
}
```

```
drink_x_ingredient {
  id                    → Table ID
  idDrink               → Cocktail ID
  idIngredient          → Ingredient ID
  order                 → Recipe order
  strMeasure            → Measure
  drink                 → Cocktail
  ingredient            → Ingredient
}
```


## Design:

![screen shot 2018-02-02 at 12 53 57](https://cdn.dribbble.com/users/2024344/screenshots/8803081/media/d0ac9042563c15d6cd65034a8962455e.png)


## Features:

### 1. Base Layout:

- Create a basic header with three buttons (with no functionality, other than the back button):
  - Drawer / Navigation Back button
  - Theme swap
  - Profile picture
- Set-up a basic tab bar with three tabs (with no functionality).

Colors     | Light Theme | Dark Theme (Optional)
---------- | ----------- | ---------------------
Background | ![#F9F9F9](https://via.placeholder.com/15/F9F9F9/000000?text=+) `#F9F9F9` | ![#2B2B2B](https://via.placeholder.com/15/2B2B2B/000000?text=+) `#2B2B2B`
Foreground | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) `#FFFFFF` | ![#373737](https://via.placeholder.com/15/373737/000000?text=+) `#373737`
Selected | ![#F3C24A](https://via.placeholder.com/15/F3C24A/000000?text=+) `#F3C24A` | ![#F3C24A](https://via.placeholder.com/15/F3C24A/000000?text=+) `#F3C24A`
Current Tab | ![#FDF3DB](https://via.placeholder.com/15/FDF3DB/000000?text=+) `#FDF3DB` | ![#F3C24A](https://via.placeholder.com/15/F3C24A/000000?text=+) `#F3C24A`

### 2. Cocktails List:

- Basic search input (without func. See **[Bonus Points](#4-bonus-points-optional)**).
- Basic categories filter (without func. See **[Bonus Points](#4-bonus-points-optional)**).
- Render a two-column list of cocktails, displaying name and photo for each one of them. When pressed it should navigate the user to the cocktail's detail screen.

### 3. Cocktail Detail:

- Render the name, the preparation time, quantity, rating and photo of the cocktail.
- Allow the user to change the cocktail's rating by tapping on any of the stars.
- Showcase the ingredients in a horizontal list. Each item should have photo, quantity and name.
- Render the recipe text.
  
### 4. Bonus Points (Optional):

i) Implement a search by name functionality on the first screen that automatically filters the results while typing, only showing the rows that satisfy the criteria entered by the user.

ii) Add functionality to the categories filter in the home screen. Only one category should be selected at any time.

iii) Add functionality to the light/dark theme switch in the header.

iv) Allow user to add a cocktail to its favorites. This information should be saved in the local storage.

v) Code cleanliness & readibility.

## Please answer the following questions once you finish coding:

A) Describe the strategy used to consume the API endpoint and data management.

B) Explain which library was used for the routing and why. Would you use the same for a consumer-facing app targeting thousands of users? Why?
  I decided to use react-navigation since it's the most widely-used and I'm very familiar with it. It's most easy to implement deep linking with react-native-router but it's possible with react-navigation though.
C) Have you used any strategy to optimize the performance of the list generated for the first feature?
  I prefer to use map function and render inside of it instead of use FlatList, since it's more readable. It's known that FlatList it's most performant than using a loop, but since it's a shortlist of items I decided to use the mapping approach.
D) Would you like to add any further comments or observations?
  Concerning graphQL API call, I was first trying to use ApolloClient, but ApolloClient seems to be unstable since was giving me incompatibility errors with react hooks since under the hood Apollo Client uses the useState function. Finally, I take the Axios approach and embedding the queries inside the POST calls.
  The font used in the designs are a Paid one (50USD) and is called Passenger Display Bold. I used the most similar one which is UTMTimesBold.
  The thumbnails of the drink collection doesn't seem to be the same as in the design, so the final result is a little different from the mock.
  The same happens with the ingredients, but ingredient collection doesn't have any images to show, so by now the ingredients list is a blank image. We can say that it's a technical debt by now.
  For the custom header I'm using hooks since the header it's a function component.
  I used redux for ingredients list collection loading, and just for this technical challenge. There is a tendency to use redux for everything, so if I needed to decide if we use redux or not for this challenge I wouldn't do it since it's a small example, and taking the approach of calling the API directly instead of using redux it's more readable and less complex.

## Delivery Steps: 

Please clone the repository, complete the exercise, upload the solution to your own repo and share the link with us. If you have any questions, you can reach out directly via email. Remember, all instructions for running the application (including installing relevant libraries, etc.) should be included in the README.md file. 

1. Clone the repo to your local machine.
2. Implement the functionality and update the README.md file with instructions to setup and run the application.
3. Create a repo with your personal account and create a branch from `master` named `base` and push all the third-party code needed (Libraries, Frameworks, etc.).
4. Create a branch from `base` named `challenge` and push your own code (Remember to update the Readme file providing any instructions on how to run the project if needed).
5. Finally create a Pull Request from `challenge` to `base` and share the link with us. **Important: We don't accept Pull Requests to this repository**.

Thank you and good luck!