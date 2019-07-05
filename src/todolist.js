import React, { Component, Fragment } from 'react';
import TodoList from './todoitem';
class ToduList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todo: []
    }
  }
  handleInputChange (e) {
    this.setState({
      text: e.target.value
    })
  }
  handleAddClick (e) {
    this.setState({
      todo: [...this.state.todo, this.state.text],
      text: ''
    })
  }
  handleClickDelete (index) {
    console.log(index)
    let list = [...this.state.todo];
    list.splice(index, 1)
    this.setState({
      todo: list
    })
  }
  render () {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.text}
            onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleAddClick.bind(this)}>增加</button>
        </div>
        <ul>
          {
            this.state.todo.map((item, index) => (
              <TodoList
                key={index}
                index={index}
                deleteFunc={this.handleClickDelete.bind(this)}
                content={item}
              />
            ))
          }
        </ul>
      </Fragment>
    )
  }
}

export default ToduList;
