import React, { Component } from 'react';
import Todo from 'Todo';

class TodoList extends Component {

  renderTodos(todos) {

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
        { this.renderTodos( this.props.todos ) }
      </div>
    );
  }
};

export default TodoList;
