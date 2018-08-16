import React, {Component} from 'react'
import './HomeHeader.styl'

export default class HomeHeader extends Component {
  render(){
    return(
      <div className="header">
        <div className="logo"></div>
        <div className="search">
          <i className="iconfont icon-search"></i>
          <span>搜索商品, 共9789款好物</span>
        </div>
      </div>
    )
  }
}