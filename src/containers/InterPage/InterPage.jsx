import React, {Component} from 'react'

import {connect} from 'react-redux'

import './InterPage.styl'
class InterPage extends Component {
  render() {
    return (
      <div className="interpage">
        <div className="g-bd">
          <div className="row">
            <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt='bg'/>
              <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt='bg'/>
          </div>
          <div className="row">
            <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg" alt='bg'/>
              <div className="download-app"></div>
              <a className="toHome" onClick={() => this.props.history.replace('/home')}></a>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(InterPage)

// export default InterPage