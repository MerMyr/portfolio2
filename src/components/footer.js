import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './meretheMyrhaugW.png';

const Footer = () => {
   
    return(
      
        <div className="col-sm-12 footer">
            <div className="col-sm-6 footer-link">
                <NavLink className="" to="/Contact">
                    <p>Contact me</p>
                    <p>e-mail: merethe.myrhaug@gmail.com</p>
                </NavLink>
                <NavLink className="" target="blank" to="https://www.linkedin.com/in/merethe-myrhaug-068b06a2/">
                    <i class="fab fa-linkedin-in"></i>
                </NavLink>
            </div>
            <div className="col-sm-6 footer-link">
                <NavLink className="" to="/">
                        <img className="logo-footer" alt="Merethe M logo" src={Logo}/>
                </NavLink>
            </div>
        </div>
    
    )
}

export default Footer;
