import {all, put, takeEvery} from 'redux-saga/effects'
import { CALLREPOAPI, LISTREPOS } from './action'
const date= "2017-10-22"
function* getrepo(){
    const res =yield fetch(`https://api.github.com/search/repositories?q=created:%3E${date}&sort=stars&order=desc`)
    const data = yield res.json()
    const items= data.items
    console.log(items) 
    yield put({type:LISTREPOS,items})

}
function* repos(){
    yield takeEvery(CALLREPOAPI, getrepo)
}



function* rootsaga(){
    yield all([repos()])
}
export default rootsaga