import { rootReducers } from "./rootReducer";
import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
// import repos from "./saga";
import rootsaga from "./saga";


const Sagamiddleware= createSagaMiddleware()

export const store =configureStore({
    reducer:rootReducers,
    middleware:()=>[Sagamiddleware]
})

Sagamiddleware.run(rootsaga)