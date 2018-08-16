import React, {Component} from 'react'
import {withRouter,NavLink} from 'react-router-dom'
import './footerGuide.styl'
// className={ this.props.location.pathname === '/home'?'navbar-item  on' :'navbar-item'}
class FooterGuide extends Component {

  render() {
    return (
      <div className="navBarContainer">
        <div className="navbar">
          <NavLink className="navbar-item" activeClassName='on' to='/home'>
            <span className="item_icon">
              <i className="iconfont icon-shouye-xianxing"></i>
            </span>
            <span className="title">首页</span>
          </NavLink>
          <NavLink className="navbar-item" activeClassName='on' to='/topic'>
            <span className="item_icon">
              <i className="iconfont icon-tijikongjian-xianxing"></i>
            </span>
            <span className="title">识物</span>
          </NavLink>
          <NavLink className="navbar-item" activeClassName='on' to='/list'>
            <span className="item_icon">
              <i className="iconfont icon-fenlei"></i>
            </span>
            <span className="title">分类</span>
          </NavLink>
          <NavLink className="navbar-item" activeClassName='on' to='/shopCart'>
            <span className="item_icon">
              <i className="iconfont icon-caigou-xianxing"></i>
            </span>
            <span className="title">购物车</span>
          </NavLink>
          <NavLink className="navbar-item" activeClassName='on' to='/personal'>
            <span className="item_icon">
              <i className="iconfont icon-yonghu-xianxing"></i>
            </span>
            <span className="title">个人</span>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default withRouter(FooterGuide)