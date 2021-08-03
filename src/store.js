import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const rootReducer = combineReducers({});

export const store = createStore(rootReducer, devToolsEnhancer());
