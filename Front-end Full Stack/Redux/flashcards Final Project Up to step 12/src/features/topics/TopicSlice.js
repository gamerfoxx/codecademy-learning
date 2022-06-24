import { createSlice } from "@reduxjs/toolkit";


const options = {
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: []
      };
    },
    addQuizId: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    },
  },
  // extra reducers here
};

export const topicsSlice = createSlice(options);
// selectors
export const selectTopics = (state) => state.topics.topics;
// actions + reducers
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;