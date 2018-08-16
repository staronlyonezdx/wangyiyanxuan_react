import React, {Component} from 'react'
import PropTypes from "prop-types";
import './Recommend.styl'

class Recommend extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const data = this.props.data
    return (
      <div className="recommend">
        <h3 className="title">{this.props.title}</h3>
        {
          data.length !== 0 ?
            <div className="itemMajor">
              <img src={data[0].picUrl} alt="img"/>
              <div className="info">
                <div className="line1">
                  <div className="lineTitle">{data[0].title}</div>
                  <div className="price">{data[0].priceInfo}元起</div>
                </div>
                <div className="line2">{data[0].subTitle}</div>
              </div>
            </div> : null
        }

        {
          data.length !== 0 ?
            data[1].map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="info">
                    <div className="topicTitle">{item.title}</div>
                    <div className="cont">{item.subTitle}</div>
                  </div>
                  <div className="topicPic">
                    <img src={item.picUrl} alt="img"/>
                    <div className="tag">{item.typeName}</div>
                  </div>
                </div>
              )
            }) : null
        }

      </div>
    )
  }
}

export default (Recommend)