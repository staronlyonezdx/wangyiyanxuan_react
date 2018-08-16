import React,{Component} from 'react'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'

import './TopicList.styl'
import {getTopic} from "../../../redux/actions";

class TopicList extends Component{
  componentDidMount(){
      new BScroll(this.refs.column, {
        click: true,
        scrollX: true
      })
  }
  render(){
    const column = this.props.column
    return(
      <div className="topicList">
        <div className="listWrap" ref="column">
          <ul className="listUl">
            {
              column.map((item,index) => {
                return(
                  <li className="item" key={index}>
                    <img src={item.picUrl} alt=""/>
                    <span className="num">{item.articleCount}</span>
                    <div className="title">{item.title}</div>
                  </li>
                )
              })
            }

          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({column:state.topic.column}),
  {getTopic}
)(TopicList)