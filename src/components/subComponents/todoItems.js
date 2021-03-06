import React from 'react'
	
	
	
function TodoItem(props){
    // style to add if todo is completed
    const completedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }
    const buttonStyle = {
        border: "none",
        backgroundColor: "white",
        cursor: "pointer"
    }
    const btnDoneStyle = {
        display: 'none'
    }
   
    return(
        <div className="todoItem">
            <input 
                id={props.item.id}
                name="todo"
                type="checkbox"
                checked={props.item.completed}
                onChange={() => {props.handleCheckbox(props.item.id)}} 
            /><label style={props.item.completed ? completedStyle : null}>{props.item.value}<button style={props.item.completed ? btnDoneStyle:buttonStyle} onClick={() => props.handleEdit(props.item.id)} >| Edit</button><button style={props.item.completed ? btnDoneStyle:buttonStyle} onClick={() => props.handleDelete(props.item.id)}>| Delete</button> 
            
            </label>
        </div>
    )
}
export default TodoItem;
