import {applyMiddleware, combineReducers, createStore} from "redux";
import counterReducer from "./counterReducer";
import settingReducer from "./settingReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    counterApp:counterReducer,
    settings: settingReducer
})

const store = createStore(reducers,applyMiddleware(thunk));

export default store