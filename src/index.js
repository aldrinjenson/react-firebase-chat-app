import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider,useSelector } from "react-redux";
import thunk from "redux-thunk";
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase,isLoaded } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";

// import { useSelector } from "react-redux";
// import { isLoaded } from "react-redux-firebase";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbConfig)
  )
);

const AuthIsLoaded = ({ children }) => {
  const auth =  useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <div>Splash Screen</div>;
  return children;
};

const rrfConfig = {
  useFirestoreForProfile: true ,
  userProfile: 'users'
}

const rrfProps = {
  firebase,
  // config: fbConfig,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
