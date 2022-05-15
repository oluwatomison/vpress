import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../reducers";
import { middlewares } from "../configureStore";

/**
 * Create a testing store with imported reducers, middleware and initial state.
 * globals: rootReducer
 * @param {*} initialState -- initial state for store
 * @function storeFactory
 * @returns {store} - Redux Store.
 */

export const storeFactory = (initialState) => {
     return createStore(
          rootReducer,
          initialState,
          applyMiddleware(...middlewares)
     );
};
