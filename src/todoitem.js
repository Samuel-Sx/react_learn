import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  handleDeleteItem () {
    const { deleteFunc, index } = this.props
    deleteFunc(index)
  }
  render () {
    const { content } = this.props;
    return (
      <li onClick={this.handleDeleteItem}>
        {content}
      </li>
    )
  }
}

export default TodoList;