import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';



class App extends Component {
state = {
  todos: [
    {
      id: 1,
      title: 'Take out the trash',
      completed: false,
   },
   {
    id: 2,
    title: 'Dinner with wife',
    completed: false,
 },
 {
      id: 3,
      title: 'Meeting with Boss',
      completed: false,
   }
 ]
}

// We cannot attempt to set state directly hence why this.setState method was used
// In State Component, we access todos, BUT in passed down component we used todo as parameter -> CAREFUL

// USER EVENT: Toggle Complete
// markComplete return to us the todo that were not passed 
markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if (todo.id === id ) {
      todo.completed = !todo.completed
    }
    return todo
  }) })
}

// USER EVENT: Delete an item off todo list
delTodo = (id) => {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} 
               markComplete={this.markComplete} 
               delTodo={this.delTodo}/>
      </div>
    );
  }
}


export default App;
// STATE: Different components can have their own states BUT
// You will need states that multiple components need to access.
// In this case todos needs a place to feed down to different components