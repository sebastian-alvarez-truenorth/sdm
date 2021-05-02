import { createStore, applyMiddleware, Store, compose } from "redux"
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

// preload this data in the state before the app start
const initialState: any = {};

const middleware = applyMiddleware(reduxThunk);

/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
const composeEnhancers: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const store = createStore(reducers, initialState, composeEnhancers(middleware));
const store: Store = createStore(reducers, initialState, composeEnhancers(middleware));

export default store;
