import { Route, Redirect } from "react-router";

const PublicRoutes = ({ log, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        log ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoutes;
