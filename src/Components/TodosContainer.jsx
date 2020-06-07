import React, { Component } from 'react'
import Todo from './Todo'

class TodosContainer extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map(todo => <Todo key ={todo.id} todo = {todo}/>)}
            </div>
        )
    }
}

export default TodosContainer
