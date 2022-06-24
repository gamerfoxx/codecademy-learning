import { createAsyncThunk } from "@reduxjs/toolkit" 
import { searchRecipes } from './api'

const searchRecipesByName = createAsyncThunk(
  'recipes/searchRecipesByName',
  (recipeName, thunkAPI) => { // arg renamed to recipeName
    const response = await searchRecipes(recipeName)
    return response.data
  }
)