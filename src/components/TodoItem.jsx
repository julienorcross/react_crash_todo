import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="todoItem">
        <div>
          <input
            type="checkbox"
            id={id}
            style={{ marginRight: '5px' }}
            onChange={this.props.toggleComplete.bind(this, id)}
            checked={!!this.props.todo.completed}
          />
          <label style={this.getStyle()} htmlFor={id}>
            {title}
          </label>
        </div>
        <button
          onClick={this.props.delTodo.bind(this, id)}
          className="deleteBtn">
          x
        </button>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
