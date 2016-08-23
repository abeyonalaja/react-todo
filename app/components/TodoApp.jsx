
import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch';

var TodoApp =  React.createClass({

  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
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
