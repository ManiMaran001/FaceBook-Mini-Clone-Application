import {ActionTypes} from '../Constants/ActionTypes' 
export const LoginReducer=(state={},action)=>{
switch(action.type){
    case ActionTypes.GET_LOGIN:
        return Object.assign({},state,{
            getLoginData:action.payload
        })
    default:
    return state
}
}