import {combineReducers, createStore} from "redux";
import counterReducer from "./counterReducer";
import settingReducer from "./settingReducer";

let reducers = combineReducers({
    counterApp:counterReducer,
    settings: settingReducer
})

const store = createStore(reducers);

window.store = store

export default store