import {combineReducers, createStore} from "redux";
import counterReducer from "./counterReducer";
import loadingReducer from "./loadingReducer";

let reducers = combineReducers({
    loadingPage:loadingReducer,
    counterApp:counterReducer
})

const store = createStore(reducers);

export default store