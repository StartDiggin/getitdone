import React from "react"


class UpdateForm extends React.Component {
    constructor(){
        super()
        this.state={
            edit: false,
            fname: "",
            id: 0,
            items: []
        }
    }

    onInputChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.addPerson(e)
        this.setState({
            fname: ''
        })
    }
    
    addPerson = (e) => {
        let id = Date.now()
        const {name,value} = e.target.fname
        let personObj = { id:id, name:name, fname:value}
        let newArr = this.state.items
        newArr.push(personObj)
        this.setState({
            items: newArr
        })
    }

    deletePerson = (id) => {
        let newArr = this.state.items.filter(items => items.id !== id )
        this.setState({
            items: newArr
        })
    }

    editPerson = (id) => {
        const person = this.state.items.find(item => item.id === id)
        this.setState({
            edit:true,
            fname:person.fname,
            id:id
        })
    }
    
    handleUpdate = (e) => {
        e.preventDefault()
        let id = this.state.id
        this.setState(() => {
            const person = this.state.items.find(item => item.id === id)
            person.fname = e.target.fname.value 
            return { person }
        })
        this.resetState()
    }

    resetState = () => {
        this.setState({
            fname: '',
            edit:false
        })
    }


    render(){
    const personList = this.state.items.map(item => <li key={item.id}>{item.fname} | 
        <button onClick={() => this.deletePerson(item.id)}>Del</button> | 
        <button onClick={() => this.editPerson(item.id)}>Edit</button> </li>)

        return(
            <div>
                <div>
                    { this.state.edit ? <form onSubmit={this.handleUpdate}>
                    <label>Name:</label>
                    <input 
                        type="text"
                        name="fname"
                        value={this.state.fname} 
                        placeholder="First Name"
                        onChange={this.onInputChange}  
                    />
                    <button>Update</button>
                    </form> : <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text"
                        name="fname"
                        value={this.state.fname} 
                        placeholder="First Name"
                        onChange={this.onInputChange}  
                    />
                    <button>Submit</button>
                </form> }
                </div>
                <ul>
                    {personList}
                </ul>


            </div>
        )
    }

}

export default UpdateForm