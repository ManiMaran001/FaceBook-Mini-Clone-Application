import axios from 'axios'
import { ActionTypes } from '../Constants/ActionTypes'
import history from '../../Routers/history'
export const getLogin=(data)=>{
    let apiUrl="https://fakestoreapi.com/auth/login"
    console.log("api")  
   return (dispatch)=>{
     axios({
         method:"POST",
         url:apiUrl,
         data:data
     }).then((res)=>{
         console.log(res)
         dispatch({type:ActionTypes.GET_LOGIN,payload:res})
         localStorage.setItem("Usertoken",res.data.token)
         history.push("/Home")
     })
     .catch((error)=>{
         console.log(error)
     })
   }
}

// export const getLogin=(product)=>{
//     return{
//         type:ActionTypes.GET_LOGIN,
//         payload:product
//     }
// }