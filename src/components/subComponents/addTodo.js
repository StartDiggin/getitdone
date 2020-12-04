import React from 'react'


function addTodo(props){
    return (
        <div>
           <form onSubmit={props.onSubmit}>
                <label>Update Todo:</label>
                <input 
                    type="text" 
                    name = "todo"
                    value = {props.todo}
                    placeholder = "Todo"  
                    onChange = {props.onChange}  
                />
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default addTodo  
