import React from 'react'


function updateTodo(props, id){
    return (
            <div>
                <h3>Update Todo</h3>
                <form onSubmit = {props.handleUpdate}>
                    <label>Todo:</label>
                    <input 
                        id={id}
                        type="text" 
                        name = "todo"
                        value = {props.text}
                        placeholder = "Todo"  
                        onChange = {props.handleChange}  
                    />
                    <button>Update</button>
                </form>
            </div>
        )
}

export default updateTodo