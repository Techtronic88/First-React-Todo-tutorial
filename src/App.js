import React, { Component } from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';
import './App.css';

class App extends Component {
state = {
  todos: []
}

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
}

// USER EVENT: Toggle Complete
// markComplete return to us the todo that were not passed 
markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if (todo.id === id ) {
      todo.completed = !todo.completed
    }
    return todo
    }) 
  })
}

// USER EVENT: Delete items off todo list and update UI (display items remaining)
// We will up the state with a new array of the items NOT ticked off 
delTodo = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`) // Targeting the ID clicked
  .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
}



// USER EVENT: Adding a new Item
// This method will achieve two things -> the UI updates with added list
// send POST REQUEST to the server (not real server)
addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10', {
    title,
    complete: false
  }).then(res => this.setState({todos: [...this.state.todos, res.data]}));

}


  render() {
    const {addTodo, markComplete, delTodo} = this 
    return (
      <Router>
            <div className="App">
              <div className="container"> 
                <Header />
                  <Route exact path="/" render={ props => (
                          <React.Fragment>
                            <AddTodo addTodo={addTodo} />
                            <Todos   todos={this.state.todos} 
                                     markComplete={markComplete} 
                                     delTodo={delTodo}
                                    />
                          </React.Fragment>)} 
                      />
                  <Route path="/about" component={About} />    
              </div>
            </div>
      </Router>   
    );
  }
}


export default App;