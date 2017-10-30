import React from 'react';
import { Link } from 'react-router';

const NavBar = (props) => {
  return(
    <nav className ="navbar navbar-toggleable-md navbar-light bg-faded">
    <Link to='/' className="navbar-brand">
    {props.logo}
    </Link>

  <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className ="navbar-toggler-icon"></span>
  </button>


  <div className ="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className ="navbar-nav mr-auto">
      <li className ="nav-item active">
        <Link to='/profile' className="nav-link">Profile</Link>
      </li>
      <li className ="nav-item">
        <Link to='/service' className="nav-link">Service</Link>
      </li>
      <li className ="nav-item">
        <Link to='/contact' className="nav-link">Contact</Link>
      </li>
    </ul>
    <form className ="form-inline my-2 my-lg-0">
    <Link to ='/signup' role="button" className ="btn btn-outline-success">Sign Up</Link>
    </form>
  </div>
</nav>
  );
}

export default NavBar;
