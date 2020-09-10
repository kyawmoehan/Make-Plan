import React, { useState } from "react";
import { connect } from "react-redux";
import { signin } from "../../store/actions/authAction";

const SignIn = ({ signin, authError }) => {
  console.log("test" + authError);
  let [state, setState] = useState({ email: "", password: "" });
  let handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    signin(state);
  };
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="gray-text text-darken-5">Login In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (creds) => dispatch(signin(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
