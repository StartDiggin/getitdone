import React from 'react'


function Form(props){
    return (
        <div>
            <form onSubmit = {props.handleSubmit}>
                <input 
                    type="text" 
                    name = "todo"
                    value = {props.text}
                    placeholder = "Todo"  
                    onChange = {props.handleChange}  
                />
                <button>Add Todo</button>
            </form>
            {props.text}
        </div>
    )
}

export default Form

