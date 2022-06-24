import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from '../topics/TopicsSlice';

const initialState = {
  quizzes: {}
  }//creates a centralized initial state for the file

const options = {
    name: "quizzes",
    initialState: initialState,
    reducers: {
      addQuiz: (state, action) => {
        const { id, name, topicId, cardIds } = action.payload;
        state.quizzes[id] = {
          id,
          name,
          topicId,
          cardIds
        };
      },//reducer to create a new quiz
    },
    // extra reducers here
  };
//start thunk
  export const addQuizIdForQuiz = payload => {
    const { quizId, name, topicId, cardIds } = payload;
      return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(payload));
        dispatch(addQuizId({quizId: quizId, topicId: topicId}))
      };
  };
//end thunk

  export const quizzesSlice = createSlice(options);
//start selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;
// end selectors
// start actions + reducers
export const { addQuizzes } = quizzesSlice.actions;
export default quizzesSlice.reducer;
// end actions + reducers