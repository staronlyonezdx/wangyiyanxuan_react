import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getHome} from "../../../redux/actions";
import './GoodsList.styl'

class GoodsList extends Component {
  componentDidMount(){
    this.props.getHome()
  }
  render() {
    const cateList = this.props.cateList
    // console.log(cateList);
    return (
      <div>
        {
          cateList.map((cate, index) => {
            return (
              <div className="goodsList" key={index}>
                <h3 className="title">{cate.name}好物</h3>
                <ul className="list">
                  {
                    cate.itemList.map((item, index) => {
                      return (
                        <li className="item" key={index}>
                          <img src={item.listPicUrl} alt="img"/>
                          <div className="desc">{item.simpleDesc}</div>
                          <div className="name">{item.name}</div>
                          <div className="price">￥{cate.name}</div>
                        </li>
                      )
                    })
                  }

                  <div className="more">
                    <p>更多好物</p>
                    <i></i>
                  </div>
                </ul>
              </div>
            )
          })
        }

      </div>
    )
  }
}

export default connect(
  state => ({cateList: state.home.cateList}),
  {getHome}
)(GoodsList)