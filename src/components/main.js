import React from 'react'
import Data from "../data/todosData"
import TodoItem from "./subComponents/todoItems"

class Main extends React.Component {
    constructor(){
        super()
        this.state={
            name:"",
            todoData: Data,
            done: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.completedTodo = this.completedTodo.bind(this)
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
        this.completedTodo(id)
        // update state with variable
        this.setState({
            todoData: updateTodo
        })
    }

    completedTodo(id){
        const updateDone = []
        this.state.todoData.map(todo => {
            if(todo.id === id && todo.completed){
                updateDone.push(todo)
            }
            return todo
        })
        this.setState({
            done: updateDone
        })
    }

    render(){
        const todoList = this.state.todoData.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        const doneList = this.state.done.map(item => <TodoItem key={item.id} item={item} handleCompleted={this.completedTodo} />)

        return(
            <div>
                <h1 className="main">Todos on my list of shit to get done!!!</h1>
                <ul className="main__list">
                    {todoList}
                </ul>
                <h2>Finished Items:</h2>
                <ul>
                    {doneList}
                </ul>
            </div>
        )
    } 
}

export default Main;