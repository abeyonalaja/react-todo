
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
          text: 'Walk the dog',
          completed: false
        }, {
          id: uuid(),
          text: 'Clean the yard'
        }
      ]
    }
  },

  handleAddTodo: function(text) {

    this.setState({
      todos:[...this.state.todos,{id:uuid(), text: text, completed: true}]
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
    let { todos } = this.state;
    return (
      <div className="">
        <TodoSearch onSearch={ this.handleSearch } />
        <TodoList todos={ todos } onToggle={ this.handleToggle} />
        <AddTodo onAddTodo={ this.handleAddTodo } />
      </div>
    );
  }
});

export default TodoApp;
