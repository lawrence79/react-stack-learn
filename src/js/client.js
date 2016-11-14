import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Repos from './components/Repos'

class Main extends Component {
  // add functions here

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

const app = document.getElementById('app');
render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), app)