import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand link-light" to="/">Navbar</Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"  aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link link-light" to="/">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
