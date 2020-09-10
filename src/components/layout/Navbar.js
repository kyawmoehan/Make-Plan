import React from "react";
import { Link } from "react-router-dom";
import SignedOutLink from "./SignedOutLink";
import SignedInLink from "./SignedInLink";
import { connect } from "react-redux";

const Navbar = ({ auth }) => {
  const links = auth.uid ? <SignedInLink /> : <SignedOutLink />;
  return (
    <nav className="nav-wraper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MakePlan
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapeStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapeStateToProps)(Navbar);
