import {createStore, combineReducers} from "redux"
// import {configureStore} from "redux/"
// import { configureStore } from '@reduxjs/toolkit'

import todos from "./reducer/todo"

const rootReducer = combineReducers({
    todos
})

const store = createStore(rootReducer);


export default store;
