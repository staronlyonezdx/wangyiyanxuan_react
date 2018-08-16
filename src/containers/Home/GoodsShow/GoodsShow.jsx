import React, {Component} from 'react'
import PropTypes from "prop-types";
import BScroll from 'better-scroll'

import './GoodsShow.styl'

class GoodsShow extends Component {
  state = {
    myClass: 'goodsWrap'
  }
  static propTypes = {
    data: PropTypes.array.isRequired,
    one: PropTypes.string.isRequired,
    two: PropTypes.string.isRequired
  }

  componentWillReceiveProps() {
    if (this.props.two === '2') {
      this.setState({
        myClass: 'goodsContainer'
      })
    }

  }

  componentDidUpdate() {
    if (this.props.data.length !== 0) {
      if (this.props.two === '2') {
        // console.log(11);
        new BScroll('.goodsContainer', {
          click: true,
          scrollX: true
        })
      }
    }
  }

  componentDidMount() {
    if (this.props.one === '1') {
      new BScroll('.goodsWrap', {
        click: true,
        scrollX: true
      })
    }
  }

  render() {
    return (
      <div className="goodsShow">
        <div className={this.state.myClass}>
          <ul className="goodsUl">
            {
              this.props.data.length ?
                this.props.data.map((item, index) => {
                  return (
                    <li className="goodsLi" key={index}>
                      <div className="img">
                        <img src={item.primaryPicUrl} alt="bg"/>
                      </div>
                      <div className="name">{item.name}</div>
                      <div className="nameDoc">{item.simpleDesc}</div>
                      <div className="price">¥{item.retailPrice}</div>
                    </li>
                  )
                }) : null
            }

            <div className="more">
              <span>查看全部</span>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default GoodsShow
