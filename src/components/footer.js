import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './meretheMyrhaugW.png';

const Footer = () => {
   
    return(
      
        <div className="col-sm-12 footer">
            <NavLink className="col-sm-4 footer-link" to="/Contact">
                <p>Contact me</p>
                <p>e-mail: merethe.myrhaug@gmail.com</p>
            </NavLink>

            <NavLink className="col-sm-4 footer-link" to="/">
                    <img className="logo-footer" alt="Merethe M logo" src={Logo}/>
            </NavLink>

            <NavLink className="col-sm-4 footer-link" target="blank" to="https://www.linkedin.com/in/merethe-myrhaug-068b06a2/">
                <i class="fab fa-linkedin-in"></i>
            </NavLink>
        </div>
    
    )
}

export default Footer;
