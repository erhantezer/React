
import { createStore, combineReducers } from 'redux';

import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
    counterRed: counterReducer,
})

export const getStore = () => {
    const store =createStore(rootReducer);
    return store;
}