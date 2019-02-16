import {UPDATE_CURRENT_PAGE} from "../actionTypes";
import { combineReducers } from 'redux'

const initialState = {
  currentPage: "home",
};

const eventsState = {
  fetching: false,
  fetched: false,
  event: [],
  error: null,
}

const eventsReducer = (state = eventsState, action) => {
  switch (action.type) {
      case "FETCH_EVENTS_REQUEST": {
          return {... state, fetching: true}
      }
      case "FETCH_EVENTS_FAILURE": {
          return {... state, fetching: false, error: action}
      }
      case "FETCH_EVENTS_SUCCESS": {
          return {
              ... state, 
              fetching: true, 
              fetched: true,
              event: action.event
          }
      }
  }
  return state;
}

const routerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  routerReducer,
  eventsReducer
})
export default rootReducer;