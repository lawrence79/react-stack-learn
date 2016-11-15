import React, { Component } from 'react'
import List from './List'

class About extends Component {

    render() {

        const list = [1, 2, 3, 4, 5]

        return (
            <div>
              <h2>About Us</h2>
              <List list={numbers}/>
            </div>
        )
    }
}

export default About