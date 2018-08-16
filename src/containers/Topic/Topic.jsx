import React, {Component} from 'react'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'

import './Topic.styl'
import {getTopic} from "../../redux/actions";
import TopBar from '../../components/TopBar/TopBar'
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace'
import Toplb from './Toplb/Toplb'
import TopicList from './TopicList/TopicList'
import Recommend from './Recommend/Recommend'
import TopicShow from './TopicShow/TopicShow'
import MoreTopic from './MoreTopic/MoreTopic'


class Topic extends Component {
  componentDidMount(){
    this.props.getTopic()
    this.wrapScroll = new BScroll('.wrapTopic', {
      click: true
    })
  }

  handleClick(){
    this.wrapScroll.scrollTo(0,0,2000)
  }

  render() {
    const {recommend,zhenpin,yxLook} = this.props.topic
    return (
      <div className="topic">

        <TopBar/>

        <div className="wrapTopic">
          <div className="wrapContent">
            <Toplb/>

            <TopicList/>

            <WhiteSpace/>

            <Recommend data={recommend} title='为你推荐'/>

            <WhiteSpace/>

            <TopicShow/>

            <WhiteSpace/>

            <Recommend data={zhenpin} title='产品甄选'/>

            <div className="whiteSpace"></div>

            <div className="look">
              <h3 className="title">严选LOOK</h3>
              <div className="content">
                <img src={yxLook.picUrl} alt="img"/>
                <div className="author">
                  <div className="authorPic">
                    <img src={yxLook.avatar} alt="img"/>
                  </div>
                  <div className="authorName">{yxLook.nickname}</div>
                </div>
                <p className="desc">{yxLook.content}</p>
              </div>
            </div>

            <MoreTopic/>

          </div>
        </div>

        <div className="goTop" onClick={() => this.handleClick()}>
          <i></i>
        </div>

      </div>
    )
  }
}

export default connect(
  state => ({topic: state.topic}),
  {getTopic}
)(Topic)

// export default Topic