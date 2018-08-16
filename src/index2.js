import React from 'react'
import ReactDOM from 'react-dom'
// import {HashRouter} from 'react-router-dom'
import {HashRouter} from 'react-keeper'
import {Provider} from 'react-redux'


import App from './App'
import './assets/css/reset.css'
import './assets/js/hotcss'
import './assets/css/mixins.styl'
import './mock/mockServer'
import store from './redux/store'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>

), document.querySelector("#root"))
