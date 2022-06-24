import { createStore, applyMiddleware } from 'redux';

const messageReducer = (state = '', action) => {
  if (action.type === 'NEW_MESSAGE') {
    return action.payload;
  } else {
    return state;
  }
}

// Paste the logger function here.
const logger = storeAPI => next => action => {
  console.log(storeAPI.getState())
 
  const nextState = next(action);
  console.log(nextState);
  return nextState;
};

const store = createStore(messageReducer, '', applyMiddleware(logger));
store.dispatch({
  type: 'NEW_MESSAGE', 
  payload: 'I WROTE A MIDDLEWARE'
})