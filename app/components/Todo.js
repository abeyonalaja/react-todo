
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

    return(
      <div onClick={ () => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={ completed }/>
        <p>{ text }</p>
        <p>{ this.renderDate() }</p>
      </div>
    );
  }
}

export default Todo;
