import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    project : projectReducer,
    auth : authReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default rootReducer