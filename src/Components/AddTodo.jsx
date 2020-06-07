import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        newTask: ''
    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.newTask)
    }

    render() {
        return (
            <form onSubmit = {this.handleOnSubmit}>
                <input type = 'text' name = 'newTask' value = {this.state.newTask} onChange = {this.handleOnChange}/>
                <input type = 'submit'/>
            </form>
        )
    }
}

export default AddTodo
