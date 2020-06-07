import React, { Component } from 'react'

class Todo extends Component {

    handleOnChange = (e) => {
        console.log('hello')
    }
    render() {
        return (
            <div>
                <span style = {this.props.todo.completed ? {textDecoration: 'line-through'}:null}>{this.props.todo.task}</span>
                <form>
                    <input type = 'checkbox' checked = {this.props.todo.completed ? true:false} onChange = {this.handleOnChange}/>
                </form>
            </div>
        )
    }
}

export default Todo
