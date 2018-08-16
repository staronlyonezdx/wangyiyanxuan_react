import React, {Component} from 'react'
import Swiper from 'swiper'
import {connect} from 'react-redux'

import './Navlb.styl'
import 'swiper/dist/css/swiper.css'
import {getHome} from '../../../redux/actions'

class Navlb extends Component {

  componentDidMount() {
    this.props.getHome();
  }

  componentDidUpdate() {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        currentClass: 'my-pagination-current',
      },
      observer: true
    });
  }


  render() {
    const focusList = this.props.focusList
    return (
      <div className='NavLb'>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              focusList.map((item, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <img
                      src={item.picUrl}
                      alt="lbt"/>
                  </div>
                )
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({focusList: state.home.focusList}),
  {getHome}
)(Navlb)