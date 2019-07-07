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
  shouldComponentUpdate (nextProps, nextStart) {

    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
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

TodoItem.prototypes = {
  content: PropTypes.string,
  deleteFunc: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem;