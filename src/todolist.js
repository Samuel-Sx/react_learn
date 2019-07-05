import React, { Component, Fragment } from 'react';
import TodoList from './todoitem';
class ToduList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todo: []
    }
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }
  handleInputChange (e) {
    const text = e.target.value;
    this.setState(() => ({ text }))
  }
  handleAddClick (e) {
    this.setState(prevState => ({
      todo: [...prevState.todo, prevState.text],
      text: ''
    }))
  }
  handleClickDelete (index) {
    this.setState(prevState => {
      let todo = [...prevState.todo];
      todo.splice(index, 1);
      return { todo }
    })
  }
  getTodoItem () {
    return this.state.todo.map((item, index) => (
      <TodoList
        key={index}
        index={index}
        deleteFunc={this.handleClickDelete}
        content={item}
      />
    ))
  }
  render () {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.text}
            onChange={this.handleInputChange} />
          <button onClick={this.handleAddClick}>增加</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
}

export default ToduList;
