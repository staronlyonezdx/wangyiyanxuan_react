import {GETTOPIC, GETDATA, GETHOME, GETLIST} from './action-types'

import {reqTopic, reqData, reqFenLei, reqhome} from '../api/index'

const get_data = (data) => ({type: GETDATA, data})

const get_topic = (topic) => ({type: GETTOPIC, data: topic})

const get_fenlei = (categoryL1List) => ({type: GETLIST, data: categoryL1List})

const get_home = (home) => ({type: GETHOME, data: home})

export const getData = () => {
  return async dispatch => {
    const result = await reqData();
    if (result.code === 0) {
      dispatch(get_data(result.data))
    }
  }
}


export const getHome = () => {
  return async dispatch => {
    const result = await reqhome();
    if (result.code === 0) {
      dispatch(get_home(result.home))
    }
  }
}

export const getTopic = () => {
  return async dispatch => {
    const result = await reqTopic();
    if (result.code === 0) {
      dispatch(get_topic(result.topic))
    }
  }
}

export const getFenlei = () => {
  return async dispatch => {
    const result = await reqFenLei();
    if (result.code === 0) {
      dispatch(get_fenlei(result.categoryL1List))
    }
  }
}
