
import React, { Component } from 'react';

class TodoSearch extends Component{

  handleSearch() {
    let showCompleted = this.refs.showCompleted.checked;
    let seachText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render(){
    return(
      <div>
        <div className="">
          <input type="text"
                 ref="searchText"
                 placeholder="Search Todos"
                 onChange={ this.handleSearch.bind(this) }/>
        </div>
        <div className="">
          <label>
            <input type="checkbox"
                   ref="showCompleted"
                   onChange={this.handleSearch.bind(this)}/>
                   Show completed todos
          </label>
        </div>
      </div>
    );
  }
};

export default TodoSearch;
