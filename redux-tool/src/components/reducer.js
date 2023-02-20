import { combineReducers } from "@reduxjs/toolkit";
import usercart from "../features/usercart";
import user from "../features/user";



export default combineReducers({
    user,usercart
})