import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { setAlert } from "../actions/alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signup } from "../actions/auth";

const SignUp = ({ setAlert, signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { first_name, last_name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Password do not match", "error");
    } else {
      signup(first_name, last_name, email, password, password2);
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="auth">
      <Helmet>
        <title> QuickOwner - Sign Up </title>
        <meta name="description" content="QuickOwner SignUp page" />
      </Helmet>
      <h1 className="auth__title"> Sign Up</h1>
      <p className="auth__lead">Create an Account</p>
      <form className="auth__form" onSubmit={(e) => onSubmit(e)}>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="text"
            placeholder="John"
            name="first_name"
            value={first_name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="text"
            placeholder="Doe"
            name="last_name"
            value={last_name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
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
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="password"
            placeholder="Repeat Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <button className="auth__form__button">Sign Up</button>
      </form>
      <p className="auth__authtext">
        Already have an account?-
        <Link className="auth__authtext__link" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { signup, setAlert })(SignUp);
