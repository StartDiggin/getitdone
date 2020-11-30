import React from 'react'


function Form(props){
    return (
        <div>
            <form onSubmit = {props.handleSubmit}>
                <label>Todo:</label>
                <input 
                    type="text" 
                    name = "todo"
                    value = {props.text}
                    placeholder = "Todo"  
                    onChange = {props.handleChange}  
                />
            </form>
        </div>
    )
}

export default Form