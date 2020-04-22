import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const { heading, headerTXT, subTXT, headerLink, aboutTXT } = props;

    return(
      
        <div className="col-sm-12 header">
            <div className="col-sm-6">
                <h1>{heading}</h1> 
            </div>
            <div className="col-sm-6 header-content">
                <h4>{headerTXT}</h4>
                <h4>{subTXT}
                <NavLink to="/about">{headerLink}</NavLink>
                </h4>
                <p>{aboutTXT}</p>
            </div>
        </div>
    
    )
}

export default Header;