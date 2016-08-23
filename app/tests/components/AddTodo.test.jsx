
import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import AddTodo from 'AddTodo';

describe ('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo prop with valid data', () => {

    const TODO_TEXT = 'check mail';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    let $el = $(ReactDom.findDOMNode(addTodo));

    addTodo.refs.todoText.value = TODO_TEXT;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect( spy ).toHaveBeenCalledWith(TODO_TEXT);
  });

  it('should not call onAddTodo prop with invalid data', () => {

    const TODO_TEXT = '';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    let $el = $(ReactDom.findDOMNode(addTodo));

    addTodo.refs.todoText.value = TODO_TEXT;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect( spy ).toNotHaveBeenCalled(TODO_TEXT);
  });
})
