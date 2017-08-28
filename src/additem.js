import React,{ Component } from 'react';
import './css/additem.css';

class AddItem extends Component {


  render(){

    return(
      <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" required ref="newItem" />
        <input type="submit" value="Enter" />
      </form>
    );
  }

  //Custom Functions
  handleSubmit(e){
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }
}
  export default AddItem;
