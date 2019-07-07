import {
    CHANGE_INPUT_VALUE,
    ADD_TODOLIST,
    DELETE_TODOLIST
} from './actiontypes'

export const inputValue = value => ({
    type: CHANGE_INPUT_VALUE,
    inputValue: value
})

export const addTodo = todo => ({
    type: ADD_TODOLIST,
    todo
})

export const deletTodo = index => ({
    type: DELETE_TODOLIST,
    index
})