import {
  UPDATE_CURRENT_PAGE,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS
} from "./actionTypes";

// import fetch from 'cross-fetch';
import axios from "axios";

export const updateCurrentPage = target => ({
  type: UPDATE_CURRENT_PAGE,
  payload: target
});

export function fetchEvents() {
  return (dispatch) => {
    dispatch({
      type: FETCH_EVENTS_REQUEST
    })
    return axios.get(`https://graph.facebook.com/creativecomputing.at.cornell/events?fields=cover,description,start_time,name,place&redirect=false&access_token=${process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN}`)
      .then((response) => {
        dispatch({
          type: FETCH_EVENTS_SUCCESS,
          event: response.data.data,
        })
      });
  }
};