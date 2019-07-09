import React, { Component } from 'react'
import { store } from './store';
import { inputValue, addTodo, deletTodo } from './store/action'
import TodoItemUI from './todolistUI'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addTodoItem = this.addTodoItem.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render () {
        return (
            <TodoItemUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                addTodoItem={this.addTodoItem}
                deleteTodoItem={this.deleteTodoItem}
                todos={this.state.todos}
            ></TodoItemUI>
        )
    }

    handleStoreChange () {
        this.setState(() => store.getState())
    }
    handleInputChange (e) {
        store.dispatch(inputValue(e.target.value))
    }
    addTodoItem () {
        let todo = this.state.inputValue
        store.dispatch(addTodo(todo));
        store.dispatch(inputValue(''));
    }
    deleteTodoItem (index) {
        store.dispatch(deletTodo(index))
    }
}

export default TodoList