import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddTodo.scss';

export class AddTodo extends Component {
  state = {
    title: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="I have to..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="Submit" defaultValue="Submit" className="btn" />
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
