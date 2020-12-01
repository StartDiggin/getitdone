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
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form




// class Todo extends Component {  
//     state = {    
//         edit: false,    
//         id: null,    
//         mockData: [{      
//             id: '1',      
//             title: 'Buy Milk',      
//             done: false,      
//             date: new Date()    
//         }, {      
//             id: '2',      
//             title: 'Meeting with Ali',      
//             done: false,      
//             date: new Date()    
//         }, {      
//             id: '3',      
//             title: 'Tea break',      
//             done: false,      
//             date: new Date()    
//         }, {      
//             id: '4',      
//             title: 'Go for a run.',      
//             done: false,      
//             date: new Date()    
//         }]  }}
