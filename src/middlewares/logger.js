const logger = ({getState}) => {
    return (next) => (action) => {
        const prevState = getState();
        console.log('prevState:', prevState);
        const value = next(action);
        const nextState = getState();
        console.log('nextState:', nextState);
        return value;
    }  
}

export default logger;
