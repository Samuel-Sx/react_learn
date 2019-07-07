import {
    CHANGE_INPUT_VALUE,
    ADD_TODOLIST,
    DELETE_TODOLIST
} from './actiontypes';

const defaultState = {
    inputValue: '111',
    todos: []
};

export const todoListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.inputValue
            }
        case ADD_TODOLIST:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case DELETE_TODOLIST:
            let newTodos = [...state.todos]
            newTodos.splice(action.index, 1)
            return {
                ...state,
                todos: newTodos
            }
        default:
            return state;
    }
}