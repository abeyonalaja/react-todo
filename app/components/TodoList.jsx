import React, { Component } from 'react';
import Todo from 'Todo';

class TodoList extends Component {

  renderTodos() {
    let { todos } = this.props;

    if(todos.length === 0) {
      return (
        <p className="container__message">Nothing to Do</p>
      );
    }
    return todos.map( (todo) => {

        return (
          // console.log(todo);
          <Todo key={todo.id} { ...todo } onToggle={ this.props.onToggle }/>
        );
    });
  }

  render() {

    return(
      <div>
        { this.renderTodos() }
      </div>
    );
  }
};

export default TodoList;
