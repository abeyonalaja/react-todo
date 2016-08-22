
import React, { Component } from 'react';
import TodoList from 'TodoList';

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

  render: function (){
    let { todos } = this.state;
    return (
      <div className="">
        <TodoList todos={ todos } />
      </div>
    );
  }
});

export default TodoApp;
