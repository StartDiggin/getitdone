import React from 'react'



function TodoItem(props){
    // style to add if todo is completed
    const completedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }
    const buttonStyle = {
        border: "none",
        backgroundColor: "white",
        cursor: "pointer"
    }
    const btnDoneStyle = {
        display: 'none'
    }


    return(
        // <div style={props.item.completed ? box : null}>
        <div>
            <input 
                id={props.item.id}
                type="checkbox"
                checked={props.item.completed}
                onChange={() => {props.handleChange(props.item.id)}}  
            />
            {/* check to see if todo is completed, ternary operator */}
            <span style={props.item.completed ? completedStyle : null} >{props.item.text}  
            <button style={props.item.completed ? btnDoneStyle:buttonStyle} onClick={() => props.handleEdit(props.item.id)}>| Edit</button> </span>
        </div>
    )
}

export default TodoItem;