import { useState } from "react";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { googleLogin, emailAndPasswordLogin } from "../actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if (password.trim().length < 6) {
      return;
    }
    dispatch(emailAndPasswordLogin(email, password));
  };

  return (
    <div className="container animate__animated animate__zoomIn">
      <h1>Login</h1>
      <hr />
      <div className="row container">
        <form className="col s12" onSubmit={handleLoginWithEmail}>
          <div className="input-field col s12">
            <i className="material-icons prefix">email</i>
            <input
              onChange={handleChange}
              value={email}
              name="email"
              id="icon_prefix"
              type="text"
              className="validate"
            />
            <label htmlFor="icon_prefix">Email</label>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">vpn_key</i>
            <input
              onChange={handleChange}
              value={password}
              name="password"
              id="icon_prefix2"
              type="password"
              className="validate"
            />
            <label htmlFor="icon_prefix2">Password</label>
          </div>
          <button type="submit" className="waves-effect waves-light btn">
            Login
          </button>
          <hr />
          <GoogleButton onClick={handleGoogleLogin} />
          <Link to="/auth/register">New user? Register</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
