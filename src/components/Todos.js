import React from 'react';
import TodoItem from './TodoItem'; 

// We will pass the methods and states of MAIN component down to TodoItem.js component from here
const Todos = (props) => (  

    props.todos.map((todo) => (<TodoItem key={todo.id} todo={todo} 
    markComplete={props.markComplete} 
    delTodo= {props.delTodo}/>))
     
  )    
export default Todos

