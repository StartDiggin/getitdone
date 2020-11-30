import React from 'react'
import Data from "../data/todosData"
import TodoItem from "./subComponents/todoItems"
import CreateTodo from "./subComponents/createTodo"

class Main extends React.Component {
    constructor(){
        super()
        this.state={
            todoData: Data
        }
        this.handleChange = this.handleChange.bind(this)
    }

    


    handleChange(id) {
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
    
  

    render(){
        const todoList = this.state.todoData.map(item => item.completed ? null : <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        const todoDoneList = this.state.todoData.map(item => item.completed ? <TodoItem key={item.id} item={item} handleChange={this.handleChange}/> : null)
        

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
                    <CreateTodo />
                </span>
            </div>
        )
    } 
}

export default Main;