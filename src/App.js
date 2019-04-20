import React, { Component } from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid'
import './App.css';

class App extends Component {
state = {
  todos: [
    {
      id: uuid.v4(),
      title: 'Take out the trash',
      completed: false,
   },
   {
    id: uuid.v4(),
    title: 'Dinner with wife',
    completed: false,
 },
 {
      id: uuid.v4(),
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

// USER EVENT: Adding a new Item
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo]})
}


  render() {
    return (
      <Router>
      <div className="App">
        <div className="container"> 
          <Header />
            <Route exact path="/" render={props => (
          <React.Fragment>
                 <AddTodo addTodo={this.addTodo} />
                 <Todos todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  delTodo={this.delTodo}/>
          </React.Fragment>
          )} />
        <Route path="/about" component={About} />    
        </div>
      </div>
      </Router>   
    );
  }
}


export default App;
// STATE: Different components can have their own states BUT
// You will need states that multiple components need to access.
// In this case todos needs a place to feed down to different components