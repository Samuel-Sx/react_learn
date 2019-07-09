import React from 'react';
import { Input, Button, List } from 'antd'

// 无状态组件。仅接收一个props参数。无生命周期
const TodoItem = (props) => {
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <Input
                value={props.inputValue}
                placeholder='todo info'
                style={{ width: '300px' }}
                onChange={props.handleInputChange}
            ></Input>
            <Button
                type="primary"
                onClick={props.addTodoItem}
            >提交</Button>
            <List
                style={{ width: '300px', marginTop: '10px' }}
                bordered
                dataSource={props.todos}
                renderItem={(item, index) => (<List.Item onClick={() => { props.deleteTodoItem(index) }}>{item}</List.Item>)}
            />
        </div>
    )
}

export default TodoItem