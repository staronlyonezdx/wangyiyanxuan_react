import React, {Component} from 'react'
import {connect} from 'react-redux'

import './MoreTopic.styl'

class MoreTopic extends Component {
  render() {
    const findMore = this.props.findMore
    return (
      <div className="more">
        <div className="moreTitle">
          <div className="title">更多精彩</div>
          <div className="line"></div>
        </div>
        {
          findMore.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img src={item.itemPicUrl} alt="img"/>
                <div className="desc">{item.title}</div>
              </div>
            )
          })
        }

      </div>
    )
  }
}

export default connect(
  state => ({findMore: state.topic.findMore})
)(MoreTopic)