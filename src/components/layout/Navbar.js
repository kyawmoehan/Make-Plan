import React from "react";
import { Link } from "react-router-dom";
import SignedOutLink from "./SignedOutLink";
import SignedInLink from "./SignedInLink";

const Navbar = () => {
  return (
    <nav className="nav-wraper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MakePlan
        </Link>
        <SignedInLink />
        <SignedOutLink />
      </div>
    </nav>
  );
};

export default Navbar;
