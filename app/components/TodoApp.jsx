
import React, { Component } from 'react';
import uuid from 'node-uuid';

import TodoAPI from 'TodoAPI'
import TodoList from 'TodoList';
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch';


var TodoApp =  React.createClass({

  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },

  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },

  handleAddTodo: function(text) {

    this.setState({
      todos:[...this.state.todos,{id:uuid(), text: text, completed: false}]
    })
  },

  handleSearch: function( showCompleted, searchText ) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },

  handleToggle: function(id){

    let updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos:updatedTodos});

  },

  render: function (){
    let { todos, showCompleted, searchText } = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div className="">
        <TodoSearch onSearch={ this.handleSearch } />
        <TodoList todos={ filteredTodos } onToggle={ this.handleToggle} />
        <AddTodo onAddTodo={ this.handleAddTodo } />
      </div>
    );
  }
});

export default TodoApp;
