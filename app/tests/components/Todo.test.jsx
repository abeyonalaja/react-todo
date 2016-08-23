
import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import Todo from 'Todo';

describe ('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () =>{
    let todoData = {
      id: 199,
      text: 'Wrote todo.jsx test',
      compeleted: true
    }

    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData}  onToggle={spy}/>);
    let $el = $(ReactDom.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(199);
  })
});
