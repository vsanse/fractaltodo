import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";

const middleware =
    process.env.NODE_ENV !== "production"
        ? [require('redux-immutable-state-invariant').default(), thunk]
        : [thunk];

// Allow redux devtools only for development build 
const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware));

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        devTools
    );
}
