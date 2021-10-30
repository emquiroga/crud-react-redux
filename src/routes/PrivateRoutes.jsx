import { Redirect, Route } from "react-router";

const PrivateRoutes = ({ log, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        log ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

export default PrivateRoutes;
