
import {combineReducers} from 'redux'
import { reducers } from './reducer'

export const rootReducers= combineReducers({
    reducer:reducers
})