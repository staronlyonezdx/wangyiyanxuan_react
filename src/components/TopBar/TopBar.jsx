import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

import './TopBar.styl'

class TopBar extends Component {
  render() {
    return (
      <div className="topBar">
        <div className="bd">
          <i className="goHome" onClick={() => {this.props.history.replace('/home')}}></i>
          <i className="logo"></i>
          <div className="right">
            <i className="search"></i>
            <i className="cart"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TopBar)