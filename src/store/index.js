import { createStore, applyMiddleware } from 'redux'
import { todoListReducer } from './reducer'
import thunk from 'redux-thunk';

export const store = createStore(
    todoListReducer,
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);