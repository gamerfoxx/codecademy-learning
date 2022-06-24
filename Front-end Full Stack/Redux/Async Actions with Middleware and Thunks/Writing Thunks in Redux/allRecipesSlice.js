import { fetchRecipes } from '../../app/api'
import { createSlice } from "@reduxjs/toolkit";

// TO DO: write loadRecipes here!
const loadRecipes = () => {
  return async (dispatch) => {
    const recipes = await fetchRecipes();
    dispatch({type: 'allRecipes/addRecipes', payload: recipes});
  }
}

export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addRecipes(state, action) {
      state.recipes = action.payload
    }
  },  
});

export default allRecipesSlice.reducer;
