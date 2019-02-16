import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers/index";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { fetchEvents } from './actions'

const loggerMiddleware = createLogger()

const store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ));

store.dispatch<any>(fetchEvents()).then(() => console.log(store.getState()))

export default store;
