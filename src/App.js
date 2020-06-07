import React from 'react';

import './App.css';
import TodosContainer from './Components/TodosContainer';
import AddTodo from './Components/AddTodo';

class App extends React.Component{

  state = {
    todos: [
      {
        task: 'Mow Lawn',
        completed: false
      },
      {
        task: 'Cook Dinner',
        completed: false
      },
      {
        task: 'Create a Todo List app',
        completed: true
      }
    ]
  }

  addTodo = (task) => {
    this.setState({todos:[
      ...this.state.todos,
      {
        task,
        completed: false
      }
    ]})
  }

  render(){
    return (
      <div className="App">
        Your Super Fancy To Do List
        <AddTodo addTodo = {this.addTodo}/>
        <TodosContainer todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
