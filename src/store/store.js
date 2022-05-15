import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import LogRocket from "logrocket";
import rootReducer from "../reducers";

let middleware = [thunkMiddleware];

if (process.env.NODE_ENV === "production") {
     middleware = [thunkMiddleware, LogRocket.reduxMiddleware()];
}

const composeEnhancers = composeWithDevTools({
     // options like actionSanitizer, stateSanitizer
});

const store = createStore(
     rootReducer,
     composeEnhancers(compose(applyMiddleware(...middleware)))
);

export default store;
