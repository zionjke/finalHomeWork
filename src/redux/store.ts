import {applyMiddleware, combineReducers, createStore} from "redux";
import counterReducer from "./counterReducer";
import settingReducer from "./settingReducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    counterApp:counterReducer,
    settings: settingReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store