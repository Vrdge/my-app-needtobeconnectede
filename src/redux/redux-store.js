import { applyMiddleware, combineReducers, compose } from "redux";
import ProfileReducer from "./reducers/ProfileReducer";
import DialogsReducer from "./reducers/DialogsReducer";
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
import UsersReducer from "./reducers/UsersReducer";
import thunk from "redux-thunk";
import AppReducer from "./reducers/AppReducer";
let reducer = combineReducers({
        ProfilePage: ProfileReducer,
        Users: UsersReducer,
        DialogsPage: DialogsReducer,
        Auth: AuthReducer,
        App: AppReducer,
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({reducer}, /* preloadedState, */ composeEnhancers(
        applyMiddleware(thunk)
));




export default store