import thunk from 'redux-thunk';
import {
    applyMiddleware,
    createStore
} from 'redux';
import rootReducer from './store/root-reducer';

const getMiddleware = () => {
    const middleswares = [];
    if (process.env.NODE_ENV === 'development') {
        const { logger } = require('redux-logger');
        middleswares.push(logger);
    }
    middleswares.push(thunk);
    return applyMiddleware(...middleswares);
}

export const store = createStore(rootReducer, getMiddleware());