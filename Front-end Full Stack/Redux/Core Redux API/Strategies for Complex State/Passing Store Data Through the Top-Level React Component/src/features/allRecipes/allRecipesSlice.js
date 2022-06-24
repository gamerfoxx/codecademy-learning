import allRecipesData from '../../../data.js';

export const loadData = () => {
  return { 
    type: 'allRecipes/loadData', 
    payload: allRecipeData
  };
}

const initialAllRecipes = [];
export const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch(action.type) {
    case 'allRecipes/loadData': 
      return action.payload
    default:
      return allRecipes;
  }
}