import $ from 'jquery';

export default  {
  setTodos: function(todos){

    if($.isArray(todos)){
      localStorage.setItem('todos',JSON.stringify(todos));
      return todos;
    }

  },

  getTodos: function(){

    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e){

    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => {

        return !todo.completed || showCompleted;
    });

    filteredTodos.sort((a,b) => {
      if(!a.completed && b.completed){
        return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    })

    filteredTodos = filteredTodos.filter((todo) => {
      return searchText.length === 0 || todoText.indexOf(searchText) > -1;
    })

    return filteredTodos;
  }
};
