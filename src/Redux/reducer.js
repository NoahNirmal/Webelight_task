import { CALLREPOAPI, LISTREPOS } from "./action"


const initialState = {
  reposlist:[],
}
export const reducers = (state = initialState, action) => {
  if(action.type === CALLREPOAPI){
    return state

  }
  else if(action.type === LISTREPOS){
    console.log(action)
    return {...state,reposlist:action.items}


  }
  else{
    return state
  }
}
