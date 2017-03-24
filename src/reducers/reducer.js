import { combineReducers } from 'redux';

import { SEARCH } from '../actions/action';

const INITIAL_STATE = { whether: [] };

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
          whether: {},
          fetching: true,
          error: action.error,
          term: action.term
        })
      }

      return Object.assign({}, state, {
        whether: action.payload,
        fetching: false,
        error: action.error,
        term: action.term
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  whether: reducer,
});

export default rootReducer;
