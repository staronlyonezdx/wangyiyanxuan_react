import ajax from './ajax'

export const reqData = () => ajax('/data')
export const reqhome = () => ajax('/home')
export const reqTopic = () => ajax('/topic')
export const reqFenLei = () => ajax('/fenleiData')

