import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Expensify</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active" exact={true}>Home</NavLink>
          </li>
          <li class="nav-item">
              <NavLink className="nav-link" to="/create" activeClassName="active">Create</NavLink>
          </li>
          <li class="nav-item">
              <NavLink className="nav-link" to="/help" activeClassName="active">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;