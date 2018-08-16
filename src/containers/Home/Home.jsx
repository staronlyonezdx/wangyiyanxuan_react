import React, {Component} from 'react'

import {connect} from 'react-redux'
import BScroll from 'better-scroll'

import HomeHeader from './HomeHeader/HomeHeader'
import Mask from './Mask/Mask'
import Navlb from './Navlb/Navlb'
import ListScroll from './ListScroll/ListScroll'
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace'
import GoodsShow from './GoodsShow/GoodsShow'
import GoodsList from './GoodsList/GoodsList'
import './Home.styl'
import {getHome} from "../../redux/actions";

class Home extends Component {

  state = {
    startTime: new Date('2018/08/15 17:00:00'),
    endTime: new Date('2018/8/18 23:00:00'),
    time: []
  }
  _countDown = () => {
    let time = this.state.endTime - this.state.startTime
    // console.log(time);
    const currentTime = new Date()
    const timed = currentTime - this.state.startTime
    // console.log(timed);
    const t = time - timed;

    if (t >= 0) {
      const d = parseInt(t / (1000 * 60 * 60 * 24));
      const h = parseInt((t / (1000 * 60 * 60) % 24) + 24 * d);
      const m = parseInt(t / (1000 * 60) % 60);
      const s = parseInt(t / 1000 % 60);
      // console.log(h, m, s);
      this.setState({
        time: [h, m, s]
      })
    }

  }

  handleClick() {
    this.wrapScroll.scrollTo(0, 0, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.cuntDown)
  }

  componentDidMount() {
    this.props.getHome();
    this.wrapScroll = new BScroll('.wrapScroll', {
      click: true,
    })

    new BScroll('.goodsScroll', {
      click: true,
      scrollX: true
    })

    this.cuntDown = setInterval(this._countDown, 1000);

  }


  render() {
    const {tagList, newItemNewUserList, popularItemList, topicList} = this.props.home
    const tagListArr = tagList.slice(0, 4)
    return (
      <div className="home">
        <Mask/>

        <div className="head">
          <HomeHeader/>
          <ListScroll/>
        </div>

        <div className='wrapScroll'>
          <div>
            <Navlb/>

            <div className="explain">
              <div className="expItem">
                <i className="ziying"></i>
                <span>网易自营品牌</span>
              </div>
              <div className="expItem">
                <i className="tuihuo"></i>
                <span>30天无忧退货</span>
              </div>
              <div className="expItem">
                <i className="tuikuan"></i>
                <span>48小时无忧退款</span>
              </div>
            </div>

            <WhiteSpace/>

            <div className="goodSale">
              <div className="header">
                <span>品牌制造商直供</span>
                <i></i>
              </div>
              <div className="goods">
                <ul>
                  {tagListArr.map((tag, index) => {
                    return (
                      <li key={index}>
                        <div className="ctn">
                          <h4 className="title">{tag.name}</h4>
                          <span className="price">{tag.floorPrice}元起</span>
                        </div>
                        <img
                          src={tag.picUrl}
                          alt="bg"/>
                      </li>
                    )
                  })}

                </ul>
              </div>
            </div>

            <div className="whiteSpace"></div>

            <div className="indexFloor">
              <div className="moveNew">
                <span className="title">新品首发</span>
                <div className="all">
                  <span>查看全部</span>
                  <i></i>
                </div>
              </div>
              {/*<GoodsShow data={newItemNewUserList} type='1'/>*/}
              <GoodsShow data={newItemNewUserList} one='1' two=''/>
              {/*<GoodsShow data={popularItemList} two='1'/>*/}
            </div>

            <div className="indexFloor">
              <div className="moveNew two">
                <span className="title">人气推荐,好物精选</span>
                <div className="all">
                  <span>查看全部</span>
                  <i></i>
                </div>
              </div>

              {/*<GoodsShow data={{popularItemList,two:2}} />*/}
              {/*<GoodsShow data={popularItemList} type='2'/>*/}
              <GoodsShow data={popularItemList} two='2' one=''/>
            </div>

            <WhiteSpace/>

            <div className="countDown">
              <a href="javascript:;">
                <div className="itemLeft">
                  <div className="title">严选限时购</div>
                  <div className="countNum" v-if="msTime.show">
                    <span className="time">{this.state.time[0]}</span>
                    <span className="colon">:</span>
                    <span className="time">{this.state.time[1]}</span>
                    <span className="colon">:</span>
                    <span className="time">{this.state.time[2]}</span>
                  </div>
                  <div className="nextTitle">下一场 22:00 开始</div>
                </div>
                <div className="itemRight">
                  <img
                    src="http://yanxuan.nosdn.127.net/96dbf7cb44b1c504589b6e42c6e5e53a.png?imageView&quality=85&thumbnail=330x330"
                    alt="img"/>
                  <div className="price">
                    <span className="now">¥208</span>
                    <span className="old">¥258</span>
                  </div>
                </div>
              </a>
            </div>

            <WhiteSpace/>

            <div className="weal">
              <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="img"/>
            </div>

            <WhiteSpace/>

            <div className="goodSale">
              <div className="header">
                <span>专题精选</span>
                <i></i>
              </div>
              <div className="subject">
                <div className="goodsScroll">
                  <ul className="wrapGoods">
                    {
                      topicList.map((item, index) => {
                        return (
                          <li className="goodItem" key={index}>
                            <img src={item.itemPicUrl} alt="img"/>
                            <div className="line">
                              <h4 className="title">{item.title}</h4>
                              <span className="price">{item.priceInfo}元起</span>
                            </div>
                            <div className="desc">{item.subtitle}</div>
                          </li>
                        )
                      })
                    }

                  </ul>
                </div>
              </div>
            </div>

            <GoodsList/>

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
  state => ({home: state.home}),
  {getHome}
)(Home)