import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from '../topics/TopicSlice';

const options = {
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { quizId, name, topicId, cardIds } = action.payload;
      state.quizzes[quizId] = {
        id: quizId,
        name,
        topicId,
        cardIds
      };
    },
  },
  // extra reducers here
};

export const addQuizIdForQuiz = (payload) => {
  const { quizId, name, topicId, cardIds } = payload;
    return (dispatch) => {
      dispatch(quizzesSlice.actions.addQuiz(payload));
      dispatch(addQuizId({quizId: quizId, topicId: topicId}))
    };
};
  //thunk

export const quizzesSlice = createSlice(options);
// selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;
// actions + reducers
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;