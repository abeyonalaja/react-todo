
import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoApp from 'TodoApp';

describe ('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todo state on handleAddTodo', () => {
    let todoText = 'test to do';

    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text ).toBe(todoText);
  });

  it('should toggle completed value when handleToggle called', () => {
    let todoData = {
      id: 11,
      text: 'Test features',
      completed: false
    };

    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});

    // check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBeFalsy()
    //call handleToggle with 11
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBeTruthy()

  })
})
