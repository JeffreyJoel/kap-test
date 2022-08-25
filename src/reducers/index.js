import { combineReducers } from "redux"
import authReducer from "./isAuth"
import messageReducer from "./messageReducer"
import productReducer from "./productReducer"
import { referalReducer } from "./referalReducer"
import userReducer from "./userReducer"

const allReducer = combineReducers({
    user: userReducer,
    Auth: authReducer,
    products: productReducer,
    preamble: messageReducer,
    referrals: referalReducer
})
export default allReducer;