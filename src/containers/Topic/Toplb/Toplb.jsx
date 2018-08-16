import React, {Component} from 'react'
import {connect} from 'react-redux'
import Swiper from 'swiper'

import './Toplb.styl'
import {getTopic} from "../../../redux/actions";

class Toplb extends Component {

  componentDidMount() {
    this.props.getTopic()

  }

  componentDidUpdate() {
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      spaceBetween: 20,
      loop: true,
      slidesPerView: 1.15,
      centeredSlides: true,
      autoplay: true
    });
  }

  render() {
    const banner = this.props.banner
    return (
      <div className="wrap">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              banner.map((item, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <img src={item.picUrl} alt="img"/>
                    <div className="content">
                      <div className="subTitle">-- {item.subTitle} --</div>
                      <div className="title">{item.title}</div>
                      <div className="desc">{item.desc}</div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({banner: state.topic.banner}),
  {getTopic}
)(Toplb)