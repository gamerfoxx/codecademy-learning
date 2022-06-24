
import React, { useEffect } from 'react';
// Implement the import statements below.
import {useSelector} from 'react-redux';
import {selectFilteredAllRecipes } from './allRecipesSlice.js';

// Add the selector to the below import statement 
import { loadData } from './allRecipesSlice.js';
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

export const AllRecipes = () => {
  // Implement allRecipes variable below.
  const allRecipes = useSelector(selectFilteredAllRecipes );
  
  const onFirstRender = () => {
    // dispatch(loadData());
  }
  useEffect(onFirstRender, []);

  const onAddRecipeHandler = (recipe) => {
    // dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};


