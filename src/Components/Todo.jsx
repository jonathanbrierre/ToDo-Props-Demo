import React, { Component } from 'react'

class Todo extends Component {

    handleOnChange = (e) => {
        console.log('hello')
        this.props.completeTask(this.props.todo.id)
    }

    handleOnClick = () => {
        this.props.deleteTask(this.props.todo.id)
    }
    render() {
        return (
            <div>
                <span style = {this.props.todo.completed ? {textDecoration: 'line-through'}:null}>{this.props.todo.task}</span>
                <input style ={{marginLeft: '3vw'}} type = 'checkbox' checked = {this.props.todo.completed ? true:false} onChange = {this.handleOnChange}/>
                <button style ={{marginLeft: '3vw'}} onClick = {this.handleOnClick}>Delete</button>
            </div>
        )
    }
}

export default Todo
