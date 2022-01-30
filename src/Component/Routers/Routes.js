import React from "react";
import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Login from "../Pages/Login/Login";
import Header from "../Header/Header";
import Home from "../Pages/Home";
import Friends from "../Pages/Friends";
import history from './history'
import { Router } from 'react-router'
function Routes() {
  console.log("check login");
  return (
      <Router history={history}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/" />
          <Route component={HeaderRoutes} />
        </Switch>
      </Router>
  );
}
export default Routes;
const HeaderRoutes = () => {
  console.log("check");
  const isAccess = localStorage.getItem("Usertoken");
  console.log(isAccess);
  return (
    <React.Fragment>
      {isAccess ? (
        <div>
          <header>
            <Header />
          </header>
          <main>
            <Switch>
              <Route path="/Home" component={Home} />
              <Route path="/Friends" component={Friends} />
                        </Switch>
          </main>
        </div>
      ) : (
        <PrivateRoute exact path="/" />
      )}
    </React.Fragment>
  );
};
