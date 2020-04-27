import React, { Fragment } from "react";
import {Switch, Route} from 'react-router-dom'
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Fragment>
  );
};

export default App;
