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

  completeTask = (id) => {
    let newTodos = [...this.state.todos].map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    this.setState({todos: newTodos})
  }

  deleteTask = (id) =>{
    console.log(id)
    let newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({todos: newTodos})
  }

  render(){
    return (
      <div className="App">
        <h3>Your Super Fancy To Do List</h3>
        <AddTodo addTodo = {this.addTodo}/>
        <br></br>
        <TodosContainer todos = {this.state.todos} completeTask = {this.completeTask} deleteTask ={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
