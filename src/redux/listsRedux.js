import createActionName from '../utils/createActionName';

// selectors
export const getAllLists = (state) => state;

// Action types
const ADD_LIST = createActionName('ADD_LIST');
const FETCH_LISTS_SUCCESS = createActionName('FETCH_LISTS_SUCCESS');

// Action creators
export const addList = (title, description) => {
  return (dispatch) => {
    const newList = {
      title,
      description,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newList),
    };

    fetch('http://localhost:3011/lists', options)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: ADD_LIST,
          payload: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const fetchListsSuccess = (lists) => ({
  type: FETCH_LISTS_SUCCESS,
  payload: lists,
});

// Reducer
const listsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];

    case FETCH_LISTS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default listsReducer;