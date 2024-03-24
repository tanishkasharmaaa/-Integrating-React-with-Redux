import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {thunk} from 'redux-thunk'
import { DataReducer } from './dataReducer'
const rootRender=combineReducers({football:DataReducer})
export const store=legacy_createStore(rootRender,applyMiddleware(thunk))