import { combineReducers } from 'redux';
import { getUsers } from './api/users';

/**
 * Users Action Types
 */
const USERS = {
  FETCH: 'robodex/USERS/FETCH',
  UPDATE: 'robodex/USERS/UPDATE',
  FETCH_FAILED: 'robodex/USERS/FETCH_FAILED',
};

/**
 * Users Reducer
 */
const intialUsersState = {
  users: [],
  isLoading: false,
  error: null,
};

function usersReducer(state = intialUsersState, action) {
  switch (action.type) {
    case USERS.FETCH:
      return { ...state, isLoading: true };
    case USERS.UPDATE:
      return { ...state, users: action.payload, error: null, isLoading: false };
    case USERS.FETCH_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}

/**
 * Users Action Creators
 */
export function fetchUsers() {
  return (dispatch, getState) => {
    dispatch({ type: USERS.FETCH });

    getUsers()
      .then(users => {
        dispatch({ type: USERS.UPDATE, payload: users });
      })
      .catch(error => {
        dispatch({ type: USERS.FETCH_FAILED, payload: error.message });
      });
  };
}

/**
 * UI Action Types
 */
const UI = {
  SEARCH: 'robodex/UI/SEARCH',
};

/**
 * UI Reducer
 */
const uiInitialState = {
  query: '',
};

function uiReducer(state = uiInitialState, action) {
  switch (action.type) {
    case UI.SEARCH:
      return { ...state, query: action.payload };
    default:
      return state;
  }
}

/**
 * UI Action Creators
 */
export function search(query) {
  return { type: UI.SEARCH, payload: query };
}

export const rootReducer = combineReducers({
  users: usersReducer,
  ui: uiReducer,
});
