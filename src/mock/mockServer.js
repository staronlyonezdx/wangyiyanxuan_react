/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data'
import data_nav from './data_nav'
// import fenlei_data from './fenlei_data'
import home_data from './home_data'
import shiwu_data from './shiwu_data'
//返回data接口
Mock.mock('/data', {code: 0, data: data})
//返回bnner接口
Mock.mock('/home', {
  code: 0,
  home: {
    focusList: home_data.focusList,
    tagList: home_data.tagList,
    newItemNewUserList: home_data.newItemNewUserList,
    popularItemList: home_data.popularItemList,
    topicList: home_data.topicList,
    cateList: home_data.cateList
  }
})
Mock.mock('/topic', {
  code: 0,
  topic: {
    banner: shiwu_data.banner,
    column: shiwu_data.column,
    recommend: [shiwu_data.recommendOne, [shiwu_data.recommendTwo, shiwu_data.recommendThree]],
    zhenpin: [shiwu_data.zhenOne, [shiwu_data.zhenTwo, shiwu_data.zhenThree]],
    tenfifteen: shiwu_data.tenfifteen,
    yxLook: shiwu_data.yxLook,
    findMore: shiwu_data.findMore
  }
})
Mock.mock('/fenleiData', {
  code: 0,
  categoryL1List: data_nav.categoryL1List
})

