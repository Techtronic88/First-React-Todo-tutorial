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
  render() {
    // In this component we must acknowledge and use todo as parameter. NOT todos object itself
    return (
      <div style={this.getStyle()}>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}
 
export default TodoItem
