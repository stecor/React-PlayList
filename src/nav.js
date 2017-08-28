import React,{Component} from 'react';
import { NavLink }  from 'react-router-dom';
import './css/todo.css';

class Nav extends Component{
  render(){
  return(

      <ul className='nav'>
        <li>
        <NavLink exact activeClassName='active' to='/todo'>
        Home
        </NavLink>
        </li>
        <li>
        <NavLink activeClassName='active' to='/about'>
        About
        </NavLink>
        </li>
      </ul>

  )
  }
}
export default Nav;
