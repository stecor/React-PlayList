import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './nav';
import About from './about';
import Todo from './todo';
import './css/todo.css';


class App extends Component{
  render(){
    return(
      <Router>
        <div className='container'>
          <Nav />
          <Route path='/todo' component={Todo}/>
          <Route path='/about' component={About}/>
        </div>
      </Router>
    );
  }
}
export default App;
