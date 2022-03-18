import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { loginReducer } from "../reducers/loginReducers";

const reducers = combineReducers({
    login: loginReducer,
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))