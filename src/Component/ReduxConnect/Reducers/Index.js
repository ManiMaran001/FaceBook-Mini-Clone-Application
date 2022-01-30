import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import {RootReducer} from './RootReducer';

const middleWare = [thunkMiddleware, logger];

function ConfigureStore(initialState) {
    return createStore(RootReducer, initialState, applyMiddleware(...middleWare));
}

const store = ConfigureStore();
export default store;