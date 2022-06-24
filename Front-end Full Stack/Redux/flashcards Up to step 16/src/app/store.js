import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/TopicsSlice.js';
import quizzesReducer from '../features/quizzes/QuizzesSlice.js';
import cardsReducer from '../features/cards/CardSlice.js';

export default configureStore({
  reducer: {
		topics: topicsReducer,
		quizzes: quizzesReducer,
		cards: cardsReducer
	},
});
