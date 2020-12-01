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
            todoData: []
        }
    }

    


    handleChange = (id) => {
        // create variable
        const updateTodo = this.state.todoData.map(todo => {
            // check if todo.id matches, return if true
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        
        // update state with variable
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
        const text = e.target.todo.value
        let todoObj = { id:id, text: text, completed: false}
        let todoArray = this.state.todoData
        todoArray.push(todoObj)
        this.setState({
            todoData:todoArray
        })
    }

    handleEdit = (e, id) => {
        // const todo = this.state.todoData.find(item => item.id === id ? item.text : null)
        // const todo = this.state.todoData.find(item => item.id === id ?
        //     <form>
        //         <input 
        //             id={item.id}
        //             type="checkbox"
        //             checked={item.completed}
        //             value={e.target.text.value}
        //         />
        //     </form> : null
            
        // )
        // console.log(todo)
        this.setState({
            edit: true
        })
        
    }

    handleUpdate = (e, id) => {
        e.preventDefault()
        let todo = this.state.todoData.filter(item => item.id === id)
        console.log(id, todo)
    }
    
  

    render(){
        const todoList = this.state.todoData.map(item => item.completed ? null : <TodoItem key={item.id} item={item} handleChange={this.handleChange} handleEdit={this.handleEdit} />)
        const todoDoneList = this.state.todoData.map(item => item.completed ? <TodoItem key={item.id} item={item} handleChange={this.handleChange} handleEdit={this.handleEdit} /> : null)

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
                    {this.state.edit ? <UpdateTodo handleUpdate={this.handleUpdate} /> : <CreateTodo handleSubmit={this.handleSubmit}/>}
                </span>
            </div>
        )
    } 
}

export default Main;