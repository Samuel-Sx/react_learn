import React, { Component } from 'react';
import PropTypes from 'prop-types'
class TodoItem extends Component {
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

TodoItem.prototype = {
  content: PropTypes.string,
  deleteFunc: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem;