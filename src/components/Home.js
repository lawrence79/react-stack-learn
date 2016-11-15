import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(), isToggleOn: 'OFF'};

      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
              <h2>Home</h2>
              <p>It is { this.state.date.toLocaleTimeString() } </p>
              <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
              </button>
            </div>
        )
    }
}

export default Home