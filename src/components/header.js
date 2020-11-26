import React from 'react'
// import '../sass/header.scss'


class Header extends React.Component {
    state = {
        name: ""
    }

    render(){
        return(
            <div>
                <h1 className="header">Get It Done</h1>
            </div>
        )
    }
}

export default Header;