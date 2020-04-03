import React from 'react';
import Me from './me-original.png';

const SubHeader = (props) => {
    const { imgTXT, subHeading } = props;

    return(
      
        <div className="row col-sm-12">
            <p>{imgTXT}</p>
            <img alt={imgTXT} scr={Me}/> 
            <h2>{subHeading}</h2>
            <div className="col-sm-7 line"></div>
        </div>
    
    )
}

export default SubHeader;
