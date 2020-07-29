import React, { Fragment, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

import "./log_in.css";

// import AlertContext from "../../context/alert/alertContext";

import AuthContext from "../../context/auth/authContext";

const Login = (props) => {
  // const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  // const { setAlert } = alertContext;
  const { login, error, cleanErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      // props.history.push("/");
    }
    if (error === "Invalid cradentials") {
      // setAlert(error, "danger");
      cleanErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      // setAlert("Please fill all the fields ", "danger");
    }
    login({
      email,
      password,
    });
  };
  let history = useHistory();

  const closeForm = () => {
    history.push("/");
  };
  return (
    <Fragment>
      {isAuthenticated ? <Redirect to='/' /> : null}

      <div className='wrap_log_in ' style={{ zIndex: 11 }}>
        <i
          id='out_log_in'
          className='outForm fas fa-times'
          onClick={closeForm}
        ></i>
        <form className='form-signin ' onSubmit={onSubmit}>
          <i className='mb-4 fas fa-headphones'></i>
          <h1
            className='h3 mb-3 font-weight-normal'
            style={{ letterSpacing: "0.1rem" }}
          >
            Please Sign In
          </h1>
          <label htmlFor='inputEmail' className='sr-only'>
            Email address
          </label>
          <input
            value={email}
            name='email'
            onChange={onChange}
            type='email'
            id='inputEmail'
            className='mb-1 form-control'
            placeholder='Email address'
            required
            autoFocus=''
          />
          <label htmlFor='inputPassword' className='sr-only'>
            Password
          </label>
          <input
            value={password}
            name='password'
            onChange={onChange}
            type='password'
            id='inputPassword'
            className='mb-1 form-control'
            placeholder='Password'
            required
          />
          {/* {this.state.user === "Search" && <p>Connect To Data Base...</p>}
        {this.state.user === "user_not_found" && <p>somthing wrong...</p>} */}
          <input
            type='submit'
            value='Login'
            className='btn btn-lg btn-dark btn-block'
            type='submit'
          />
          <div className='mt-3 d-flex justify-content-center'></div>
          <p className='mt-5 mb-0 text-muted'>© 2019-2020</p>
          <p className='m-0 lead text-muted'> Meet Artist</p>
        </form>
      </div>
    </Fragment>
  );
};
export default Login;
