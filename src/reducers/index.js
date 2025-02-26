import {combineReducers} from "@reduxjs/toolkit";
import taskReducer from  "./taskReducer.js"
const rootReducer = combineReducers({
    tasks: taskReducer,
});

export default rootReducer;