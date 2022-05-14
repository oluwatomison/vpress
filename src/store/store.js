import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import LogRocket from "logrocket";
import rootReducer from "../reducers";
//import Auth from "../modules/Auth.module";

/**
 * Store initial state
 */
const initialState = {
     authLogin: {
          error: "",
          loading: false,
          // isAuthenticated: Auth.isUserAuthenticated(),
     },
};

/**
 * Logger for Redux
 */
const logger = createLogger({
     // ...options
});

/**
 * middleware and enhancers
 */
// let middleware = [logger, thunkMiddleware];

let middleware = [thunkMiddleware];

if (process.env.NODE_ENV === "production") {
     middleware = [thunkMiddleware, LogRocket.reduxMiddleware()];
}

const composeEnhancers = composeWithDevTools({
     // options like actionSanitizer, stateSanitizer
});

const store = createStore(
     rootReducer,
     initialState,
     composeEnhancers(
          compose(applyMiddleware(...middleware))
          // other store enhancers if any
     )
);

export default store;
