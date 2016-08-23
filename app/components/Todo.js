
import React, { Component } from 'react';
import moment from 'moment';

class Todo extends Component{

  renderDate() {
    var message = 'created ';
    var timestamp = this.props.createdAt;

    return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
  }

  render() {
    let { id, text, completed, createdAt } = this.props
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    return(
      <div className={todoClassName} onClick={ () => {
        this.props.onToggle(id);
      }}>
        <div>
          <input type="checkbox" checked={ completed }/>
        </div>

        <div>
          <p>{ text }</p>
          <p className="todo__subtext">{ this.renderDate() }</p>
        </div>
      </div>
    );
  }
}

export default Todo;
