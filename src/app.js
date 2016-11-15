import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, hashHistory } from 'react-router'

import './css/main.scss'
import routes from './routes'

const app = document.getElementById('app')

render((
    <Router history={hashHistory} routes={routes} />
), app)