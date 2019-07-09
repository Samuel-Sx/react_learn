import React, { Component } from 'react';
import { store } from './store';
import { inputValue, addTodo, deletTodo, resetTodoList } from './store/action';
import { Input, Button, List } from 'antd'
import { connect } from 'react-redux';

class TodoList extends Component {
    render () {
        const {
            inputValue,
            todos,
            handleInputChange,
            addTodoItem,
            deleteTodoItem
        } = this.props
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <Input
                    value={inputValue}
                    placeholder='todo info'
                    style={{ width: '300px' }}
                    onChange={handleInputChange}
                ></Input>
                <Button
                    type="primary"
                    onClick={addTodoItem}
                >提交</Button>
                <List
                    style={{ width: '300px', marginTop: '10px' }}
                    bordered
                    dataSource={todos}
                    renderItem={(item, index) => (<List.Item onClick={() => { deleteTodoItem(index) }}>{item}</List.Item>)}
                />
            </div>
        )
    }

    componentDidMount () {
        store.dispatch(resetTodoList())
    }
}

const mapStateToProps = state => {
    return {
        inputValue: state.inputValue,
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // 输入事件
        handleInputChange (e) {
            dispatch(inputValue(e.target.value))
        },
        // 添加待办
        addTodoItem () {
            dispatch(addTodo())
        },
        // 删除待办
        deleteTodoItem (index) {
            dispatch(deletTodo(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)