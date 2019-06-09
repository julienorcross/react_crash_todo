import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()} className="todos">
        <div className="todoItem container">
          <input
            type="checkbox"
            id={id}
            style={{ marginRight: '5px' }}
            onChange={this.props.toggleComplete.bind(this, id)}
            checked={!!this.props.todo.completed}
          />
          <label for={id}>{title}</label>
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </div>
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

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export default TodoItem;
