import React from 'react'
import Form from "./todoForm"


function createTodo(props){
    return (
            <div>
                <Form handleSubmit={props.handleSubmit} />
            </div>
        )
}

export default createTodo