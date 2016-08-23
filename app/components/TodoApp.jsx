
import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

var TodoApp =  React.createClass({

  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid()  ,
          text: 'Walk the dog'
        }, {
          id: uuid(),
          text: 'Clean the yard'
        }
      ]
    }
  },

  handleAddTodo: function(text) {
    
    this.setState({
      todos:[...this.state.todos,{id:uuid(), text: text}]
    })
  },

  handleSearch: function( showCompleted, searchText ) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },

  render: function (){
    let { todos } = this.state;
    return (
      <div className="">
        <TodoSearch onSearch={ this.handleSearch } />
        <TodoList todos={ todos } />
        <AddTodo onAddTodo={ this.handleAddTodo } />
      </div>
    );
  }
});

export default TodoApp;
