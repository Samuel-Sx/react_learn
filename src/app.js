import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
class TodoList extends Component {
    render () {
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <Input
                    placeholder='todo info'
                    style={{ width: '300px' }}
                ></Input>
                <Button type="primary">提交</Button>
                <List
                    style={{ width: '300px', marginTop: '10px' }}
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList