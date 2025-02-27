
import { combineReducers } from "@reduxjs/toolkit";
import useReducer  from "./slice/userSlice";

const rootReducer = combineReducers({
    user: useReducer
})

export default rootReducer