import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const { heading, headerTXT, subTXT, headerLink } = props;

    return(
      
        <div className="col-sm-12 header">
            <div className="col-sm-6">
                <h1>{heading}</h1> 
                
            </div>
            <div className="col-sm-6 header-content">
                <p>{headerTXT}</p>
                <p>{subTXT}
                <NavLink to="/">{headerLink}</NavLink></p>
            </div>
        </div>
    
    )
}

export default Header;
//<img className="signature" alt="mm-logo-b.svg" src="/./../images/mm-logo-b.svg"/>