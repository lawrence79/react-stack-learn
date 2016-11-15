import React, { Component } from 'react'

class List extends Component {
    render() {

        const {list} = this.props
        const mappedList = list.map((number, index) =>
            <li key = { index } > { number } </li>
        )

        return (
            <div>
              <ul> { mappedList } </ul>
            </div>
        )
    }
}

export default List
