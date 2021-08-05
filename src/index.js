import createStore from './createStore';
import applyMiddleware from './applyMiddleware';
import compose from './compose';
import combineReducers from './combineReducers';

const redux = {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
};

export default redux;
