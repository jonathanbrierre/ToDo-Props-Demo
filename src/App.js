import React from 'react';
import {v4 as uuidv4} from 'uuid'
import './App.css';
import TodosContainer from './Components/TodosContainer';
import AddTodo from './Components/AddTodo';

class App extends React.Component{

  state = {
    todos: [
      {
        id: uuidv4(),
        task: 'Mow Lawn',
        completed: false
      },
      {
        id: uuidv4(),
        task: 'Cook Dinner',
        completed: false
      },
      {
        id: uuidv4(),
        task: 'Create a Todo List app',
        completed: true
      }
    ]
  }

  addTodo = (task) => {
    this.setState({todos:[
      ...this.state.todos,
      {
        id: uuidv4(),
        task,
        completed: false
      }
    ]})
  }

  completeTask = () => {

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
