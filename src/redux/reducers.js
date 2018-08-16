import {combineReducers} from 'redux'
import {GETTOPIC, GETDATA, GETHOME, GETLIST} from './action-types'


const initData = []

function data(preState = initData, action) {
  switch (action.type) {
    case GETDATA:
      return action.data;
    default:
      return preState;
  }
}

const initHome = {
  focusList: [],
  tagList: [],
  newItemNewUserList: [],
  popularItemList: [],
  topicList: [],
  cateList: []
}

function home(preState = initHome, action) {
  switch (action.type) {
    case GETHOME:
      return action.data
    default:
      return preState
  }
}

const initTopic = {
  banner: [],
  column: [],
  recommend: [],
  zhenpin: [],
  tenfifteen: [],
  yxLook: {},
  findMore: []
}

function topic(preState = initTopic, action) {
  switch (action.type) {
    case GETTOPIC:
      return action.data
    default:
      return preState
  }
}

const initList = []

function list(preState = initList, action) {
  switch (action.type) {
    case GETLIST:
      return action.data
    default:
      return preState
  }
}

export default combineReducers({
  data,
  home,
  topic,
  list
})