import {createStore, combineReducers} from "redux";
import todoReducer from "./reducers/todoReducer";




const rootReducer = combineReducers({
    todoRed : todoReducer,
});

export const getStore = () => {
    const store = createStore(rootReducer)
    return store;
}

