import React from 'react'
// import Data from "../data/todosData"
import TodoItem from "./subComponents/todoItems"
import CreateTodo from "./subComponents/createTodo"
import UpdateTodo from "./subComponents/updateTodo"


class Main extends React.Component {
    constructor(){
        super()
        this.state={
            edit: false,
            id: 0,
            todo: "",
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

    handleEdit = (id) => {
        const todo = this.state.todoData.find(todo => todo.id === id)
        this.setState({
            edit: true,
            id:id,
            todo:todo.name
        })
    }

    handleUpdate = (e) => { 
        e.preventDefault()
        let id = this.state.id
        this.setState(() => {
            const todo = this.state.todoData.find(todo => todo.id === id)
            todo.text = e.target.todo.value 
            return { todo }
        })
        this.resetState()
    }

    resetState = () => {
        this.setState({
            edit: false,
            id:0,
            todo: ''
        })
    }

    
    render(){
        const todoList = this.state.todoData.map(item => item.completed ? null : <TodoItem key={item.id} item={item} 
        handleChange={this.handleChange}  
        handleEdit={this.handleEdit} 
        handleDelete={this.handleDelete}
        />)
        const todoDoneList = this.state.todoData.map(item => item.completed ? <TodoItem key={item.id} item={item} handleChange={this.handleChange} /> : null)
        

        return(
            <div>
                {this.state.edit ? <UpdateTodo onChange={this.handleChange} handleUpdate={this.handleUpdate}/> : <CreateTodo  handleSubmit={this.handleSubmit}/>}
                <div>
                    <ul className="main__list">
                        {todoList}
                    </ul>
                </div>
                
                
                <div>
                    <h2>Completed List!</h2>
                    <ul>
                        {todoDoneList}
                    </ul>
                </div>
                
                
            </div>
        )
    } 
}

export default Main;