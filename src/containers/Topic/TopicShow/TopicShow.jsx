import React, {Component} from 'react'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'

import './TopicShow.styl'

class TopicShow extends Component {

  componentDidMount(){
    new BScroll('.showWrap', {
      click: true,
      scrollX: true
    })
  }
  render() {
    const tenfifteen = this.props.tenfifteen
    return (
      <div className="topicShow">
        <h3 className="title">十点一刻</h3>
        <div className="showWrap">
          <ul className="showUl">
            {
              tenfifteen.map((item, index) => {
                return (
                  <li className="showLi" key={index}>
                    <span className="lineTitle">-- 今日话题 --</span>
                    <span className="tsTitle">{item.title}</span>
                    <span className="desc">{item.desc}</span>
                    <span className="joinInfo">{item.participantNum}人参与话题</span>
                  </li>
                )
              })
            }

            <div className="more">
              <span>查看全部话题</span>
              <i></i>
            </div>
          </ul>
        </div>
      </div>
    )
  }

}

 export default connect(
   state => ({tenfifteen:state.topic.tenfifteen}),
   {}
 )(TopicShow)