import React, { Component } from 'react'

export class AddTodo extends Component {



// COMPONENT STATE: This only exists within the addTodo component ONLY
// With Todo.js that is App level Component and it gets managed by Redux or other API
state = {
    title: ''
}

onChange = (e) => this.setState({[e.target.name]: e.target.value });

// This will be on the APP level state, we will pass this up the component chain because it will change the state of the APP.
onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title); // Users input will get pushed into existing state data object in APP.JS
    this.setState({ title: '' });
}
  render() {
    return (
      
        <form onSubmit={this.onSubmit} style={{ display: 'flex', height: '30px'}}>
        <input  type="text" style={{flex: '10', padding: '5px'}} name="title" placeholder="Add Todo ..."
        value={this.state.title}
        onChange={this.onChange}
        />
        <input type="submit" value="Submit" className="btn" style={{flex: '1'}} />
        

        </form>
     
    )
  }
}

export default AddTodo
