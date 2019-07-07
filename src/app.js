import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import { store } from './store';
import { inputValue, addTodo, deletTodo } from './store/action'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addTodoItem = this.addTodoItem.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render () {
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <Input
                    value={this.state.inputValue}
                    placeholder='todo info'
                    style={{ width: '300px' }}
                    onChange={this.handleInputChange}
                ></Input>
                <Button
                    type="primary"
                    onClick={this.addTodoItem}
                >提交</Button>
                <List
                    style={{ width: '300px', marginTop: '10px' }}
                    bordered
                    dataSource={this.state.todos}
                    renderItem={(item, index) => (<List.Item onClick={this.deleteTodoItem.bind(this, index)}>{item}</List.Item>)}
                />
            </div>
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