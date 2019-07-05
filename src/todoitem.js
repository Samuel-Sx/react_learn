import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  handleDeleteItem () {
    this.props.deleteFunc(this.props.index)
  }
  render () {
    return (
      <li
        onClick={this.handleDeleteItem}
      >{this.props.content}</li>
    )
  }
}

export default TodoList;