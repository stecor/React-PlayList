import React, { Component } from 'react';
import TodoItem from './todoitem';
import AddItem from './additem';
import './css/todo.css';

class Todo extends Component {

  constructor(props){
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.state= {todos:['wash up','eat some cheese', 'take a nap','buy flowers'] }
  }

  render(){
      var todos = this.state.todos;

      todos = todos.map(function(item,index){
        return (
          <TodoItem item={item} key={index} onDelete={this.onDelete}/>
        );
      }.bind(this));

    return (

        <div id="todo-list">
          <p>The busiest people have the most leisure...</p>
          <ul>{todos}</ul>
          <AddItem onAdd={this.onAdd}/>
        </div>

    );
  }

  //Custom Functions
  onDelete(item){
      var updatedTodos = this.state.todos.filter(function(val, index){
          return item !== val;
      });
      this.setState({
        todos: updatedTodos
      });
  }

  onAdd(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  }

  //lifecycle functions
  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate');
  }

}

export default Todo;
