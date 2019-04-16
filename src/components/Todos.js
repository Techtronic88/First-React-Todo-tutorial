import React, { Component } from 'react';
import TodoItem from './TodoItem'; // Here we are just loading a whole new component


class Todos extends Component {
  render() {
      // You will get hello 3 times because you have imported TodoItem.js components
      // todo papameter IS a props so we can pass it to TodoItem.js component
      // We can then jump to TodoItem.js and use the todo parameter
      return this.props.todos.map((todo) => (<TodoItem key={todo.id} todo={ todo } />)); 
     
    }
}

export default Todos;
