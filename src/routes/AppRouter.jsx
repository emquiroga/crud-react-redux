import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";

import { firebase } from "../firebase/config-firebase";
import { login } from "../actions/auth";

import AppScreen from "../pages/AppScreen";
import AuthRouter from "./AuthRouter";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <PublicRoutes path="/auth" log={log} component={AuthRouter} />
        <PrivateRoutes exact path="/" log={log} component={AppScreen} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
