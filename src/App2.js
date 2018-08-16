import React, {Component} from 'react'
// import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
import {withRouter,Switch} from 'react-router-dom'
import {Route} from 'react-keeper'
import Home from './containers/Home/Home'
import InterPage from './containers/InterPage/InterPage'
import Topic from './containers/Topic/Topic'
import List from './containers/List/List'
import ShopCart from './containers/ShopCart/ShopCart'
import Personal from './containers/Personal/Personal'
import Login from './containers/Login/Login'
import UserCenter from './containers/UserCenter/UserCenter'
import FooterGuide from './components/FooterGuide/FooterGuide'

class App extends Component {

  state = {
    paths: ['/home', '/topic', '/list', '/shopCart']
  }

  render() {
    return (
      <div id="app">
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/interpage' component={InterPage}/>
          <Route path='/topic' component={Topic}/>
          <Route path='/list' component={List}/>
          <Route path='/shopcart' component={ShopCart}/>
          <Route path='/personal' component={Personal}/>
          <Route path='/login/:type' component={Login}/>
          <Route path='/userCenter' component={UserCenter}/>
          <Route component={InterPage}/>
        </Switch>
        {this.state.paths.find((path) => this.props.location.pathname === path) ? <FooterGuide/> : ''}

      </div>
    )
  }
}

export default withRouter(App)
