import buttonReducer from "./ButtonReducer";
import addReducer from "./addReducer";
import { combineReducers } from "redux";


const rootreducer=combineReducers({
    button :buttonReducer,
    addit :addReducer
});


export default rootreducer;



