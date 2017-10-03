import { combineReducers } from 'redux';

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
  error: null,
};

function usersReducer(state = intialUsersState, action) {
  switch (action.type) {
    case USERS.UPDATE:
      return { users: action.payload, error: null };
    case USERS.FETCH_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

/**
 * Users Action Creators
 */
export function getUsers(users) {
  return { type: USERS.UPDATE, payload: users };
}

export function showError(error) {
  return { type: USERS.FETCH_FAILED, payload: error };
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
