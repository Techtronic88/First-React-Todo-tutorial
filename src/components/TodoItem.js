import React, { Component } from 'react';

class TodoItem extends Component {
  
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    // NOTE: We are using bind to bind this to the id of the state todos in the APP> 
    const btnStyle = {
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '50%',
      cursor: 'pointer',
      float:'right'
    }

// Next 2 lines use destructure, save ALOT of this.props.todo.id / title  or this.props 
// The code is much more readable too
const {id, title} = this.props.todo; // This is going 1 level up to Todos component 
const {markComplete, delTodo} = this.props //  BIND us directly to methods from MAIN APP component
    return (
      <div style={this.getStyle()}>
          <p>
            <input type="checkbox"  
                  onChange={markComplete.bind(this, id)}/> 
                  {' '} {title}
            <button onClick={delTodo.bind(this, id)} 
                  style={btnStyle}>X</button>
          </p>
      </div>
    )
  }
}


export default TodoItem
