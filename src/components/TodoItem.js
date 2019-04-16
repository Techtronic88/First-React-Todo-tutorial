// I want to load a whole new component
// With ES7-REACT-REDUX EXTENSION, GENERATE COMPONENT BY QUICKLY USE rce+tab
import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    // In this component we must acknowledge and use todo as parameter. NOT todos object itself
    return (
      <div>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}

export default TodoItem
