import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) =>{ 
  if(localStorage.getItem('UserToken')){
    return (
     < Route {...rest} render={(props) => <Redirect to="/Home" />} />
    )
  }
  return (
    < Route {...rest} render={(props) => <Redirect to="/login" />} />
  )
};