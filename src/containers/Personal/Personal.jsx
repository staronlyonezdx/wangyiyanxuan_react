import React, {Component} from 'react'

import {connect} from 'react-redux'

import './Personal.styl'
import TopBar from '../../components/TopBar/TopBar'

class Personal extends Component {
  render() {
    return (
      <div className="peraonal">
        <TopBar/>
        <div className="loginWrap">
          <div className="logoWrap">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="img"/>
          </div>
          <div className="btnWrap">
            <div className="btnBlock" onClick={() => {this.props.history.replace('/login/phone')}} >
              <i className="loginPhone"></i>
              <span>手机号码登陆</span>
            </div>
            <div className="btnGhostRed" onClick={() => {this.props.history.replace('/login/email')}}>
              <i className="loginMail"></i>
              <span>邮箱账号登陆</span>
            </div>
            <div className="toLogin">
              <span>手机号快速注册</span>
              <i className="arrow"></i>
            </div>
          </div>
        </div>
        <section className="otherLogin">
          <div className="itemOther">
            <i className="iconfont icon-weixin"></i>
            <span>微信</span>
          </div>
          <div className="itemOther">
            <i className="iconfont icon-changyonglogo33"></i>
            <span>QQ</span>
          </div>
          <div className="itemOther">
            <i className="iconfont icon-weibo"></i>
            <span>微博</span>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(Personal)

// export default Personal