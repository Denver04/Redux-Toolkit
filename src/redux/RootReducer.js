import { combineReducers } from "@reduxjs/toolkit";
import fruitCakeReducer from "./fruits/fruitCake"

export const appReducer = combineReducers({
    fruitCake: fruitCakeReducer
})