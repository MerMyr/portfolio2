import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './graphics/meretheMyrhaugB-W_3.png';
import Menu from './graphics/SVG/menu.svg';
import Close from './graphics/SVG/close.svg';



const Nav = (props) => {
    const { home, about, contact } = props;
    const [toggleNav, setTogglNav] = useState(false);
    const [toggleDefeat, setToggleDefeat] = useState(false);

  
    const toggleNavFunc = (e) => {
      e.preventDefault();
      (e.target.id === 'menu-nav')?setTogglNav(!toggleNav): setToggleDefeat(!toggleDefeat);
      (e.target.id === 'close-nav')?setTogglNav(!toggleNav): setToggleDefeat(!toggleDefeat);
    }
    
  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <div onClick={toggleNavFunc} id="mobile-nav" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <img className={(toggleNav) ? 'menu-nav hide' : 'menu-nav show'} id="menu-nav" alt="Menu navigation" src={Menu}/> 
            <img className={(!toggleNav) ? 'menu-nav hide' : 'menu-nav show'} id="close-nav" alt="Menu navigation" src={Close} /> 
          </div>
          <button type="button" className="navbar-toggle collapsed" id="mobile-nav" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"></button>
          <NavLink className="navbar-brand" to="/">
            <img className="logo-nav" alt="Merethe M logo" src={Logo}/> 
          </NavLink>
        </div>
        <div className={(!toggleNav) ? 'collapse navbar-collapse' : 'collapse navbar-collapse in'} id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
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