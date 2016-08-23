
import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe ('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () =>{
    var todos =[{ id:1, text: "do something" }, { id:2, text: "Check mail" }];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={ todos } />);
    var todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponent.length).toBe(todos.length);
  })
});
