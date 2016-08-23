
import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo'

var TodoApp =  React.createClass({

  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }
      ]
    }
  },

  handleAddTodo: function(text) {
    alert('new todo: ' + text)
  },

  render: function (){
    let { todos } = this.state;
    return (
      <div className="">
        <TodoList todos={ todos } />
        <AddTodo onAddTodo={ this.handleAddTodo } />
      </div>
    );
  }
});

export default TodoApp;
