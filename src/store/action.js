import {
    CHANGE_INPUT_VALUE,
    ADD_TODOLIST,
    DELETE_TODOLIST,
    RESET_TODOLIST
} from './actiontypes'
import axios from 'axios';


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

const setTodos = todos => ({
    type: RESET_TODOLIST,
    todos
})

export const resetTodoList = () => {
    return (dispatch, getState) => {
        axios.get('/api/todolist').then(resp => {
            dispatch(setTodos(resp.data))
        })
    }
}