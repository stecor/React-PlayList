import React, { Component } from 'react';
import TodoItem from './TodoItem'
class TodoComponent extends Component {

  constructor(props){
    super();
    this.state= {todos:['wash up','eat some cheese', 'take a nap','buy flowers'] }
  }

  render() {

      var todos = this.state.todos;
      todos = todos.map(function(item,index){
        return (
          <TodoItem item={item} key={index} onDelete={this.onDelete}/>
        );
      });

    return (
      <div className="todo-list">
        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
      </div>
    );
  }

  //Custom Functions
  onDelete(item){
    var updatedTodos = this.state.todos.filter(function(val,index){
      return item !== val;
    });
    this.setState({ todo: updatedTodos });
  }

}

export default TodoComponent;
