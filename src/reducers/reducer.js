import { combineReducers } from 'redux';

import { SEARCH } from '../actions/action';

const INITIAL_STATE = { weather: [] };

/**
 * @name reducer
 * @param state
 * @param action
 * @returns {Object} New state
 */
function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SEARCH:
      if (action.fetching) {
        return Object.assign({}, state, {
          weather: {},
          fetching: true,
          error: action.error,
          term: action.term
        })
      }

      return Object.assign({}, state, {
        weather: action.payload,
        fetching: false,
        error: action.error,
        term: action.term
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  weather: reducer,
});

export default rootReducer;
