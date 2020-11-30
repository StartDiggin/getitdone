import React from 'react'
import Form from "./todoForm"


function createTodo(props){
    return (
            <div>
                <h3>Add Todo</h3>
                <Form handleSubmit={props.handleSubmit} />
            </div>
        )
}

export default createTodo