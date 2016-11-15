import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, hashHistory } from 'react-router'

import './css/main.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import routes from './routes';

const app = document.getElementById('app');

render((
    <Router history={hashHistory} routes={routes} />
), app)