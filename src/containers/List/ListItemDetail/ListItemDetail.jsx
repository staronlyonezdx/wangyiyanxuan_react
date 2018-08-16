import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import './ListItemDetail.styl'

class ListItemDetail extends Component {

  static propTypes = {
    currentIndex: PropTypes.number.isRequired
  }

  render() {
    const currentDetail = this.props.list[this.props.currentIndex]

    return (
      <div className="moreDetail">
        <div className="detailWrap">
          {
            currentDetail ?
              <div className="detailContent">
                <div className="img">
                  <img src={currentDetail.bannerUrl} alt="img"/>
                </div>

                <div className="detailTit">
                  <div className="title">{currentDetail.name}分类</div>
                  <div className="line"></div>
                </div>

                <div className="detail">
                  <ul className="detailUl" v-if="currentDetail">
                    {
                      currentDetail.subCateList.map((sub, index) => {
                        return (
                          <li className="item" key={index}>
                            <img src={sub.wapBannerUrl} alt="img"/>
                            <div>{sub.name}</div>
                          </li>
                        )
                      })
                    }

                  </ul>
                </div>

              </div> : null
          }

        </div>
      </div>
    )
  }
}

export default connect(
  state => ({list: state.list}),
)(ListItemDetail)