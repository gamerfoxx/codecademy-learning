import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from '../topics/TopicsSlice';

const initialState = {
  cards: {}
  }//creates a centralized initial state for the file

const options = {
    name: "cards",
    initialState: initialState,
    reducers: {
      addCard: (state, action) => {
        const { cardId, front, back  } = action.payload;
        state.cards[cardId] = {
          id: cardId,
          front,
          back
        };
      },//reducer to create a new quiz
    },
    // extra reducers here
  };


  export const cardsSlice = createSlice(options);
//start selectors
export const selectCards = (state) => state.cards.cards;
// end selectors
// start actions + reducers
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
// end actions + reducers