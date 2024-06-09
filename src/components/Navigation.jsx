import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="py-3 navbar navbar-expand-lg fixed-top auto-hiding-navbar navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">Axios</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
         
          <li className="nav-item">
          <Link to="/add">Add User</Link>
          </li>
          <li className="nav-item">
          <Link to="/list">User List</Link>
          </li>
        </ul>
      </div>
    </div>
 </nav>

 
  );
};

export default Navigation;
