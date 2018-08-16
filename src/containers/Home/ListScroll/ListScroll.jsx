import React, {Component} from 'react'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'

import './ListScroll.styl'
import {getData} from "../../../redux/actions";

class ListScroll extends Component {
  state = {
    currentIndex: 0
  }

  componentDidMount() {
    this.props.getData()
    new BScroll('.wrapper', {
      click: true,
      scrollX: true
    })
  }

  handleClick(index){
    this.setState({
      currentIndex:index
    })
  }

  render() {
    const data = this.props.data
    return (
      <div className="wrapper">
        <ul className="listUl">
          {
            data.map((item, index) => {
              return (
                <li className={this.state.currentIndex === index ? 'listLi active' : 'listLi'} key={index} onClick={() => {this.handleClick(index)}}>
                  <span className="title">{item.name}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.data}),
  {getData}
)(ListScroll)