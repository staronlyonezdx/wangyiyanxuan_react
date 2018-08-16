import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import redeucer from './reducers'

export default createStore(redeucer,composeWithDevTools(applyMiddleware(thunk)))