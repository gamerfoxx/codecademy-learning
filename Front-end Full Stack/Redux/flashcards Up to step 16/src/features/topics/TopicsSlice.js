import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
  }//creates a centralized initial state for the file

const options = {
    name: "topics",
    initialState: initialState,
    reducers: {
      addTopic: (state, action) => {
        const { id, name, icon } = action.payload;
        state.topics[id] = {
          id,
          name,
          icon,
          quizIds: []
        };
      },//reducer to create a new topic
      addQuizId: (state, action) => {
        const { quizId, topicId } = action.payload;
        state.topics[topicId].quizIds.push(quizId);
      },//reducer to add a quiz ID
    },
    // extra reducers here
  };

  export const topicsSlice = createSlice(options);
//start selectors
export const selectTopics = (state) => state.topics.topics;
// end selectors
// start actions + reducers
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
// end actions + reducers