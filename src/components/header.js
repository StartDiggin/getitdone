import React from 'react'
// import '../sass/header.scss'


class Header extends React.Component {
    state = {
        name: ""
    }

    render(){
        return(
            <div className="header">
                <h1 >Get It Done</h1>
            </div>
        )
    }
}

export default Header;