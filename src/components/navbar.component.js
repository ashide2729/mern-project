import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary" >
        <Link to="/" className="navbar-brand" >MERN weather API</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Weathers</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add Weather</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}