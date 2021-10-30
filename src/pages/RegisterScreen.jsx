import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    userName: "",
    password: "",
    password2: "",
  });
  const { email, userName, password, password2 } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if (userName.trim().length < 2) {
      return;
    }
    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        return;
      }
    }
    dispatch(register(email, userName, password));
  };

  return (
    <div className="container container animate__animated animate__zoomIn">
      <h1>Register</h1>
      <hr />
      <div className="row container">
        <form onClick={handleRegister} className="col s12">
          <div className="input-field col s12">
            <i className="material-icons prefix">email</i>
            <input
              onChange={handleChange}
              value={email}
              id="icon_prefix1"
              type="text"
              className="validate"
              name="email"
            />
            <label htmlFor="icon_prefix1">Email</label>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">assignment_ind</i>
            <input
              onChange={handleChange}
              value={userName}
              id="icon_prefix2"
              type="text"
              className="validate"
              name="userName"
            />
            <label htmlFor="icon_prefix2">Username</label>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">vpn_key</i>
            <input
              onChange={handleChange}
              value={password}
              id="icon_prefix3"
              type="password"
              className="validate"
              name="password"
            />
            <label htmlFor="icon_prefix3">Password</label>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">vpn_key</i>
            <input
              onChange={handleChange}
              value={password2}
              id="icon_prefix4"
              type="password"
              className="validate"
              name="password2"
            />
            <label htmlFor="icon_prefix4">Confirm Password</label>
          </div>
          <button type="submit" className="waves-effect waves-light btn">
            Register
          </button>
          <hr />
          <Link to="/auth/login">Login with account</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
