const createStore = (reducer, enhancer) => {
    if (enhancer) {
        return enhancer(createStore)(reducer);
    }

    let state;
    let listeners = [];
    const subscribe = (listener) => {
        listeners.push(listener);

        return () => {
            const index = listeners.indexOf(listener);
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        }
    }

    const getState = () => {
        return state;
    }

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener(state))
    }

    dispatch({type: 'fadslfjasldfjs--'});

    return {
        subscribe,
        getState,
        dispatch
    }
}

export default createStore;
