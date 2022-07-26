import { combineReducers } from "redux";
import newsReducer from "./newsReducers";
import authReducer from "./authReducers";
import appReducer from "./appReducers"

const rootReducer = combineReducers({
 app: appReducer,
 auth: authReducer,
 news: newsReducer,
})

export default rootReducer;