import React from 'react'


function updateTodo(props){
    return (
        <div>
            <form onSubmit = {props.handleUpdate}>
                <input 
                    type="text" 
                    name = "todo"
                    value = {props.todo}
                    placeholder = "Todo"  
                    onChange = {props.handleChange}  
                />
                <button>Update</button>
            </form>
        </div>
    )
}

export default updateTodo