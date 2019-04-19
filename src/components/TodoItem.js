// I want to load a whole new component
// With ES7-REACT-REDUX EXTENSION, GENERATE COMPONENT BY QUICKLY USE rce+tab
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  

  // With the function below, if we attempt to use this without arrow function, this keyword will not bind
  // Therefore we will use this.markComplete.bind(this) without arrow function
  // We will deploy arrow function in this instance

  // Just learning purpose, I will do this the hard / long way to demonstrate the inner working of props and Components trickle down

  // markComplete = (e) => {
  //   console.log(this.props)
  // }
  render() {
    // In this component we must acknowledge and use todo as parameter. NOT todos object itself
    // Applying destructure so we won't have to write this.props.id or title everytime.
    // NOTE: We are using bind to bind this to the id of the state todos in the APP> 
    const {id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox"  onChange={this.props.markComplete.bind(this, id)}/> {' '}
        {title}
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float:'right'
}



export default TodoItem
