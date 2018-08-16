import React, {Component} from 'react'

import './Mask.styl'

export default class Mask extends Component {
  state = {
    isShowMask: true
  }

  handleClick() {
    this.setState({
      isShowMask: false
    })
  }

  render() {
    return (
      <div>
        {this.state.isShowMask === true ?  <div className="mask">
          <i className="close" onClick={() => this.handleClick()}></i>
          <div className="wrap">
            <div className="modle">
              <div className="title">
                <span className="titleContent">- 新人专享礼 -</span>
              </div>
              <div className="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
              <div className="newUserItem">
                <div className="img">
                  <img
                    src="http://yanxuan.nosdn.127.net/4c372b5314d26235324abb0cf7f0713a.jpg?imageView&quality=85&thumbnail=232y232"
                    alt=""/>
                </div>
                <div className="content">
                  <div className="itemName">花样年华女士小白鞋</div>
                  <div className="manu">
                    <i className="manuTag">舒适透气，时尚经典</i>
                  </div>
                  <div className="price">
                    <span className="newPrice">¥ 259.00</span>
                    <span className="oldPrice">
                <span>¥</span>
                <span>899.00</span>
              </span>
                  </div>
                </div>
              </div>
              <div className="actCouponBtn">
                <span>领券立减¥ 60.00</span>
                <div className="linkBtn">查看更多特惠商品</div>
              </div>
            </div>
          </div>
        </div> : ''}
      </div>
    )
  }
}