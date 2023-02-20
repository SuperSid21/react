import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import quantityReducer from'./quantityReducer'

const reducers=combineReducers({
    amount:amountReducer,quantity:quantityReducer
})

export default reducers 