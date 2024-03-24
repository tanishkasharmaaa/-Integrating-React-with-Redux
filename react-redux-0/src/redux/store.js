import {combineReducers, legacy_createStore} from 'redux';
import { ItemReducer } from './reducer';
const combined=combineReducers({item:ItemReducer})
export const store=legacy_createStore(combined)