import React from 'react';
//import Me from './me-original.png';

const SubHeader = (props) => {
    const { imgTXT, subHeading } = props;

    return(
      
        <div className="row col-sm-9 subHeader-container">
            <p>{imgTXT}</p>
            <div className="col-sm-3 subHeader-img" alt={imgTXT}></div>
            <h2 className="col-sm-9">{subHeading}</h2>
        </div>
    
    )
}

export default SubHeader;
//scr={Me}