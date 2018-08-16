import React, {Component} from 'react'

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import TopBar from '../../components/TopBar/TopBar'
import './Login.styl'


class Login extends Component {
  state = {
    type: '',
    placeholder: '',
    pwdholder: '',
    text1: '',
    text2: '',
    pwd: '',
    name: ''
  }

  componentWillMount() {
    this.setState({
      type: this.props.match.params.type
    })
    if (this.state.type === 'phone') {
      this.setState({
        placeholder: '请输入手机号',
        pwdholder: '请输入短信验证码',
        text1: '遇到问题?',
        text2: '使用密码验证登陆'
      })
    }

    if (this.state.type === 'email') {
      this.setState({
        placeholder: '邮箱账号',
        pwdholder: '密码',
        text1: '注册账号',
        text2: '忘记密码'
      })
    }
  }

  // componentDidUpdate() {
  //   this.setState({
  //     type: this.props.match.params.type
  //   })
  //   console.log(this.state.type);
  //   if (this.state.type === 'phone') {
  //     console.log(11);
  //     this.setState({
  //       placeholder: '请输入手机号',
  //       pwdholder: '请输入短信验证码',
  //       text1: '遇到问题?',
  //       text2: '使用密码验证登陆'
  //     })
  //   }
  //
  //   if (this.state.type === 'email') {
  //     this.setState({
  //       placeholder: '邮箱账号',
  //       pwdholder: '密码',
  //       text1: '注册账号',
  //       text2: '忘记密码'
  //     })
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.type === 'phone') {
  //     this.setState({
  //       placeholder: '请输入手机号',
  //       pwdholder: '请输入短信验证码',
  //       text1: '遇到问题?',
  //       text2: '使用密码验证登陆'
  //     })
  //   }
  //
  //   if (this.state.type === 'email') {
  //     this.setState({
  //       placeholder: '邮箱账号',
  //       pwdholder: '密码',
  //       text1: '注册账号',
  //       text2: '忘记密码'
  //     })
  //   }
  //
  //   return this.state !== nextState
  // }

  render() {
    return (
      <div className="login">
        <TopBar/>
        <div className="wrapLogin">
          <div className="logo">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="img"/>
          </div>
          <div className="loginInfo">
            <div className="input-1">
              <input type="text" placeholder={this.state.placeholder}/>
              {/*<input type="text" placeholder='手机号登陆'/>*/}
            </div>
            <div className="input-2">
              {/*<input type='text' placeholder='验证码'/>*/}
              <input type={this.state.type === 'email' ? 'password' : 'text'} placeholder={this.state.pwdholder}/>
            </div>
            <div className="act">
              <span className="left">{this.state.text1}</span>
              {/*<span className="left">遇到问题</span>*/}
              <span className="right">{this.state.text2}</span>
              {/*<span className="right">验证码发送不了</span>*/}
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
    )
  }
}

export default connect(
  state => ({}),
  {}
)(Login)

// export default Login