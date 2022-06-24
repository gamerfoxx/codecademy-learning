import { configureStore } from '@reduxjs/toolkit';
import topicsReducer from '../features/topics/TopicSlice.js';


export default configureStore({
	reducer: {
		topics: topicsReducer

	},
});