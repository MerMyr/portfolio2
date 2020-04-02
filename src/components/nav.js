import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    const { home, about, contact, logo } = props;

    return(
      
    <nav className="col-sm-12 navbar navbar-default">
      <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
                    <img alt="Merethe M logo" src={logo}/>
            </NavLink>
        <div className="navbar-header navbar-right">
          <ul className="nav navbar-nav">
            <li><NavLink className="link" to="/">{home}</NavLink></li>
            <li><NavLink className="link" to="/About">{about}</NavLink></li>
            <li><NavLink className="link" to="/Contact">{contact}</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
    
    )
}

export default Nav;
