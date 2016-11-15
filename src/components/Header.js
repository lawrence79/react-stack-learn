import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
    render() {
        return (
            <div className='header'>
              <h2>This is the header</h2>
              <ul role="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/repos">Repos</Link></li>
              </ul>
            </div>
        )
    }
}

export default Header