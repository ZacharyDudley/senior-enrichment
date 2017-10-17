'use strict'
import React from 'react'
// import { HashRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
// import Root from './components/Root'
import Routes from './components/Routes'
// import Home from './components/Home'
// import MenuBar from './components/MenuBar'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main')
)
