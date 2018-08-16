import React, {Component} from 'react'
import {Toast} from 'antd-mobile'

import {connect} from 'react-redux'
import TopBar from '../../components/TopBar/TopBar'
import './Login.styl'


class Login extends Component {
  state = {
    phoneDisplay: 'none',
    emailDisplay: 'none',
    text: '获取验证码',
    computedTime: 0,
    alert: ''
  }

  login() {
    const phone = this.refs.phone.value
    const code = this.refs.code.value
    if (!/^1\d{10}$/gi.test(phone)) {
      this.setState({
        alert: '请输入正确的手机号'
      })
      return;
    }

    if (!/1234/gi.test(code)) {
      this.setState({
        alert: '请输入正确的验证码'
      })
      return;
    }

    if (/^1\d{10}$/gi.test(phone) && /1234/gi.test(code)) {
      this.props.history.replace('/userCenter')
    }

  }

  getyzm() {
    let time = 10;
    const phone = this.refs.phone.value;
    if (/^1\d{10}$/gi.test(phone)) {
      const setInterId = setInterval(() => {
        this.setState({
          computedTime: time--,
          alert: `已发送${time}s`
        })
        if (time <= 0) {
          this.setState({
            computedTime: 0,
            alert: ''
          })
          clearInterval(setInterId);
        }

        if (time === 6) {

          // Toast.success('验证码为1234', 1,() => {
          //   console.log(11);
          //   this.setState({
          //     computedTime: 0,
          //     alert: ''
          //   })
          //   clearInterval(setInterId);
          // });
          // Toast.success('验证码为1234',1)
          this.setState({
            alert:'验证码为1234'
          })
        }
      }, 1000);

    }

  }

  componentWillMount() {

    if (this.props.match.params.type === 'phone') {
      this.setState({
        phoneDisplay: 'block'
      })
    }

    if (this.props.match.params.type === 'email') {
      this.setState({
        emailDisplay: 'block'
      })
    }

  }


  render() {
    const {phoneDisplay, emailDisplay} = this.state
    return (
      <div>
        <div className="loginPhone" style={{display: phoneDisplay}}>
          <TopBar/>
          <div className="wrapLogin">
            <div className="logo">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="img"/>
            </div>

            <div className="loginInfo">
              <div className="input-1">
                <input type="text" placeholder='手机号登陆' ref='phone'/>
              </div>
              <div className="input-2">
                <input type='text' placeholder='请输入短信验证码' ref='code'/>
                <span className="yzm" onClick={() => this.getyzm()}>{this.state.text}</span>
              </div>
              <div className="act">
                <span className="left">遇到问题?</span>
                <span className="right">使用密码验证登陆</span>
              </div>
              <p className="alert">{this.state.alert}</p>
              <div className="btnBlock" onClick={() => this.login()}>
                <span>登陆</span>
              </div>
            </div>
            <div className="footer">
              <div className="btnGhostRed" onClick={() => {
                this.props.history.replace('/personal')
              }}>
                <span>其他方式登陆</span>
              </div>
              <div className="toLogin">
                <span>注册账号</span>
                <i className="arrow"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="loginEmail" style={{display: emailDisplay}}>
          <TopBar/>
          <div className="wrapLogin">
            <div className="logo">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="img"/>
            </div>
            <div className="loginInfo">
              <div className="input-1">
                <input type="text" placeholder='邮箱账号'/>
              </div>
              <div className="input-2">
                <input type='password' placeholder='密码'/>
                <div className='switch'>
                  <div className='inner'></div>
                </div>
              </div>
              <div className="act">
                <span className="left">注册账号</span>
                <span className="right">忘记密码</span>
              </div>
              <div className="btnBlock">
                <span>登陆</span>
              </div>
            </div>
            <div className="footer">
              <div className="btnGhostRed" onClick={() => {
                this.props.history.replace('/personal')
              }}>
                <span>其他方式登陆</span>
              </div>
              <div className="toLogin">
                <span>注册账号</span>
                <i className="arrow"></i>
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
)(Login)

// export default Login