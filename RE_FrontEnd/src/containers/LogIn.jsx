import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";

const LogIn = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="auth">
   <Helmet>
        <title> QuickOwner - Login </title>
        <meta name="description" content="QuickOwner Login page" />
      </Helmet> 
      <h1 className="auth__title"> Log In</h1>
      <p className="auth__lead">Sign into Your Account</p>
      <form className="auth__form" onSubmit={(e) => onSubmit(e)}>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="email"
            placeholder="johnDoe@QuickOwner.com"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="password"
            placeholder="******"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <button className="auth__form__button">Login</button>
      </form>
      <p className="auth__authtext">
        Don't have an account?-
        <Link className="auth__authtext__link" to="/signup">
          Sign Up
        </Link>
      </p>
      <p className="auth__authtext">
        Forgot password?-
        <Link className="auth__authtext__link" to="/signup">
          Reset
        </Link>
      </p>
    </div>
  );
};

LogIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LogIn);
