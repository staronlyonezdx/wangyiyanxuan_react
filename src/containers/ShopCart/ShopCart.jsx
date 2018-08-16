import React, {Component} from 'react'

import {connect} from 'react-redux'
import './ShopCart.styl'


class ShopCart extends Component {
  render() {
    return (
      <div className="shopCart">
        <div className="title">购物车</div>
        <div className="reactid">
          <ul className="m-servicePolicy">
            <li className="item">
              <div className="servicePolicy"></div>
              <span>30天无理由退换货</span>
            </li>
            <li className="item">
              <div className="servicePolicy"></div>
              <span>48小时快速退款</span>
            </li>
            <li className="item">
              <div className="servicePolicy"></div>
              <span>满88元免费邮</span>
            </li>
          </ul>
          <div className="m-defaultPage">
            <div className="container">
              <div className="img"></div>
              <div className="txt">
                <div className="cart-title">去添加点什么吧</div>
                <div className="toLogin" onClick={() => {this.props.history.replace('/personal')}}>登录</div>
            </div>
          </div>
        </div>

      </div>

  </div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(ShopCart)

// export default ShopCart