import React from 'react'
// import Data from "../data/todosData"
import TodoItem from "./subComponents/todoItems"
import CreateTodo from "./subComponents/createTodo"


class Main extends React.Component {
    constructor(){
        super()
        this.state={
            edit: false,
            id: 0,
            name: "",
            todoData: []
        }
    }

    handleChange = (id) => {
        // handles checkboxes
        const updateTodo = this.state.todoData.map(todo => {
            // check if todo.id matches, return if true
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        // updates state when checkbox is checked or unchecked.
        this.setState({
            todoData: updateTodo
        })
    }

    // methods for the form
    handleSubmit = (e) => {
        e.preventDefault()
        this.addTodo(e)
        e.target.todo.value = ''
    }

    addTodo = (e) => {
        let id = Date.now()
        const {value, name, type} = e.target.todo
        let todoObj = { id:id, text: value, name: name, type: type, completed: false}
        let todoArray = this.state.todoData
        todoArray.push(todoObj)
        this.setState({
            todoData:todoArray
        })
    }

    handleDelete = (id) => {
        const newList = this.state.todoData.filter(item => item.id !== id)
        this.setState({
            todoData: newList
        })
    }

    onInputChange = (e) => {
        console.log('editing')
        // const {name, value} : e.target.todo 


        // this.setState({
        //     [name]: value
        // })
    }

    
    
  

    render(){
        const todoList = this.state.todoData.map(item => item.completed ? null : <TodoItem key={item.id} item={item} handleChange={this.handleChange}  handleDelete={this.handleDelete}/>)
        const todoDoneList = this.state.todoData.map(item => item.completed ? <TodoItem key={item.id} item={item} handleChange={this.handleChange} /> : null)
        

        return(
            <div>
                <h1 className="main">Todos on my list of shit to get done!!!</h1>
                <ul className="main__list">
                    {todoList}
                </ul>
                <h2>Finished Items:</h2>
                <ul>
                    {todoDoneList}
                </ul>
                <span>
                    <CreateTodo  handleSubmit={this.handleSubmit}/>
                </span>

                <div>
                    <form onSubmit={this.updateTodo}>
                        <label>Todo:</label>
                        <input 
                            type="text" 
                            name = "todo"
                            value = {this.state.name}
                            placeholder = "Todo"  
                            onChange = {this.onInputChange}  
                        />
                        <button>Submit</button>
                    </form>
                </div>
               
               
            </div>
        )
    } 
}

export default Main;