import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';
import logger from 'redux-logger';

export const store = createStore(rootReducer, applyMiddleware(logger));

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
