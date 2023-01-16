import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  let { mode, toggleMode, color, btnMode } = props;
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-${mode} bg-${mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Newsify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch form-check-reverse">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckReverse"
            onClick={toggleMode}
          />
          <label
            htmlFor="flexSwitchCheckReverse"
            style={{ color: `${color}` }}
          >{`Enable ${btnMode} mode`}</label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
