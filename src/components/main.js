import React from 'react'
import TodoItem from "./subComponents/todoItems"
import AddTodo from "./subComponents/addTodo"
import UpdateTodo from "./subComponents/updateTodo"


class Main extends React.Component {
    constructor(){
        super()
        this.state={
            edit: false,
            id: 0,
            todo: "",
            todoData: []
        }
    }
    handleChange = (e) => {
        // Input values
        const { name, value } = e.target
        // updates state when checkbox is checked or unchecked.
        this.setState({
            [ name ]: value
        })
    }
    handleCheckbox = (id) => {
        // handles checkboxes
        const updateTodo = this.state.todoData.map(todo => {
            // check if todo.id matches, return if true
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        this.setState({
            todoData: updateTodo
        })
    }
    
    // methods for the form
    handleSubmit = (e) => {
        e.preventDefault()
        this.addTodo(e)
        this.resetState()
    }
    addTodo = (e) => {
        let id = Date.now()
        const {name, value} = e.target.todo
        let todoObj = { id:id, name:name, value:value, completed: false}
        let todoArray = this.state.todoData
        todoArray.push(todoObj)
        this.setState({
            todoData:todoArray
        })
    }
    handleDelete = (id) => {
        const newList = this.state.todoData.filter(item => item.id !== id)
        this.setState({
            todoData: newList
        })
    }
    handleEdit = (id) => {
        const todo = this.state.todoData.find(todo => todo.id === id)
        this.setState({
            edit:true,
            id:id,
            todo: todo.value
        })
    }
    handleUpdate = (e) => {
        e.preventDefault()
        let id = this.state.id
        this.setState(() => {
            const todo = this.state.todoData.find(todo => todo.id === id)
            todo.value = e.target.todo.value
            return { todo }
        })
        this.resetState()
    }
    resetState = () => {
        this.setState({
            edit:false,
            id:0,
            todo:''
        })
    }
    
  
    render(){
        const todoList = this.state.todoData.map(item => item.completed ? null : <TodoItem key={item.id} item={item} handleCheckbox={this.handleCheckbox} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>)
        const todoDoneList = this.state.todoData.map(item => item.completed ? <TodoItem key={item.id} item={item} handleCheckbox={this.handleCheckbox} onChange={this.onInputChange}/> : null)
        
        return(
<div className="main">
    <h1 >Todos on my list of stuff to get done!!!</h1>
    {/* Toggle betweet add and update todo  */}
    <div>
        {this.state.edit ?  <UpdateTodo onSubmit={this.handleUpdate} onChange={this.handleChange} todo={this.state.todo} /> : <AddTodo onSubmit={this.handleSubmit} onChange={this.handleChange} todo={this.state.todo} /> }
    </div>
    <div className="main__list">
        <ul className="main__list--items">
            {todoList}
        </ul>
    </div>
    <div>
        <h2>Finished Items:</h2>
        <ul className="main__list--items">{todoDoneList}</ul>
    </div>
</div> 
        )
    } 
}
export default Main;


