import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signouts, signout } from "../../store/actions/authAction";

const SignOut = ({ signout }) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a href="#" onClick={() => signout()}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
  };
};

export default connect(null, mapDispatchToProps)(SignOut);
