import { createStore } from 'redux'
import { todoListReducer } from './reducer'

export const store = createStore(
    todoListReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);