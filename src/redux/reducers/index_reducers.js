import {combineReducers} from "redux";
import logInReducer from "./log_in_reducer"

const allReducers = combineReducers({
    user:logInReducer
})
export default allReducers;