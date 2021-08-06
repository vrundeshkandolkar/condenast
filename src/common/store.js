import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

/**
 * overview:
 * A store is an object that holds the application's state tree.
 * There should only be a single store in a Redux app,
 * as the composition happens on the reducer level.
 */
export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
