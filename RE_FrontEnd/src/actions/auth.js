import axios from "axios";
import { setAlert } from "./alert";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

// Login
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "http://localhost:8000/api/token/",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert("Authenticated successfully", "success"));
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch(setAlert("Error Authenticating", "error"));
  }
};

// Signup
export const signup = (
  first_name,
  last_name,
  email,
  password,
  password2
) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    first_name,
    last_name,
    email,
    password,
    password2,
  });

  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/accounts/sign-up/",
      body,
      config
    );

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });

    dispatch(login(email, password));
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
    });

    dispatch(setAlert("Error Authenticating", "error"));
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch(setAlert("Logout successful", "success"));
  dispatch({ type: LOGOUT });
};
