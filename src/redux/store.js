import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';

import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

const rootReducer = combineReducers({
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;