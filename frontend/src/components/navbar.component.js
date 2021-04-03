import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          GYM
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/admin-login" className="nav-link">
                Admin Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/member-login" className="nav-link">
                Member Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/member-signup" className="nav-link">
                Member Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
