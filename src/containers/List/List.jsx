import React, {Component} from 'react'

import {connect} from 'react-redux'
import BScroll from 'better-scroll'

import {getFenlei} from "../../redux/actions";
import './List.styl'
import ListItemDetail from './ListItemDetail/ListItemDetail'

class List extends Component {

  state = {
    currentIndex: 0
  }

  componentDidMount() {
    this.props.getFenlei()
    new BScroll('.listWrap', {
      click: true
    })
  }
  handleClick(index){
    this.setState({
      currentIndex:index
    })
  }

  render() {
    const list = this.props.list
    return (
      <div className="list">
        <div className="search">
          <div className="inner">
            <div className="ipt">
              <i className="icon"></i>
              <span className="placeholder">搜索商品, 共9723款好物</span>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="navList">
            <div className="listWrap">
              <ul className="listUl">
                {
                  list.map((item, index) => {
                    return (
                      <li key={index}
                          className={this.state.currentIndex === index ? 'item active' : 'item'}
                          onClick={() => this.handleClick(index)}>
                        <a>{item.name}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>

          </div>
        </div>
        <ListItemDetail currentIndex={this.state.currentIndex}/>
      </div>
    )
  }
}

export default connect(
  state => ({list: state.list}),
  {getFenlei}
)(List)

// export default List