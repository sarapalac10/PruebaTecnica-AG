import { loginTypes } from "../types/loginTypes"

const initialState = {
  id: '',
  displayname: 'identifícate'
}

export const loginReducer = (state= initialState, action) => {
  switch(action.type){
    case loginTypes.login:
      return action.payload;
    default:
      return state
  }
}