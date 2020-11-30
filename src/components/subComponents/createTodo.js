import React from 'react'
import Form from "./todoForm"


class createTodo extends React.Component {
    constructor(){
        super()
        this.state={
            _id:'',
            text: '',
            completed: false,
            todoData: []
        }
    }

    handleChange = () => {
        console.log('handle change')
    }

    render() {
        return (
            <div>
                <h3>Add Todo</h3>
                <Form handleChange={this.handleChange}/>
            </div>
        )
    }
}

export default createTodo