import React from 'react'
import ReactDOM from 'react-dom'

import './app.css'

import {browserHistory} from 'react-router'

import App from 'containers/App/App'


const mountNode = document.querySelector('#root')
ReactDOM.render(<App history={browserHistory} />, mountNode)
