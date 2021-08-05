import compose from './compose';

const applyMiddleware = (...middlewares) => {
    return (createStore) => (reducer) => {
        const store = createStore(reducer);
        let {dispatch, getState} = store;

        const midApi = {getState, dispatch: (action) => dispatch(action)}

        const chain = middlewares.map((middleware) => middleware(midApi))

        dispatch = compose(...chain)(store.dispatch);
        
        return {...store, dispatch};
    }
}

export default applyMiddleware;
