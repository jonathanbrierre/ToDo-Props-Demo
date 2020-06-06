import React from 'react';

import './App.css';

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

  render(){
    return (
      <div className="App">
        Your Super Fancy To Do List
      </div>
    );
  }
}

export default App;
