import React, { Component } from 'react';
import TodoItem from './TodoItem'; // Here we are just loading a whole new component
import PropTypes from 'prop-types';


class Todos extends Component {

  // Again we have to go up to another level 
  // I have assigned the this.props.markComplete below
  // We will complete the markComplete in the state level of the App Component
  // markComplete = () => {
  //   console.log('Hello')
  // }

  render() {
      // You will get hello 3 times because you have imported TodoItem.js components
      // todo papameter IS a props so we can pass it to TodoItem.js component
      // We can then jump to TodoItem.js and use the todo parameter
      return this.props.todos.map((todo) => (<TodoItem key={todo.id} todo={ todo } 
      markComplete={this.props.markComplete} 
      delTodo= {this.props.delTodo}/>)); 
     
    }
}

// ADDING PROP TYPES
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;
