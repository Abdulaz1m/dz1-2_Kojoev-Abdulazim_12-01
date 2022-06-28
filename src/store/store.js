import {combineReducers} from "redux"
import { createUserReducer } from "./createUserReducer"
import { addNumberReducer } from "./addNumberReducer"

export const rootReducer = combineReducers({
    users: createUserReducer,
    numbers: addNumberReducer,
})