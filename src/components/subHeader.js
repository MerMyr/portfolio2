import React from 'react';

import Me from './graphics/me-original.png';

const SubHeader = (props) => {
    const { imgTXT, subHeading } = props;

    return(
      
        <div className="row col-sm-9 col-xs-12 subHeader-container">
            <div className="col-sm-3 col-xs-12 subHeader-img">
                <p>{imgTXT}</p>
                <img src={Me} alt={imgTXT}></img>
            </div>
            <h2 className="col-sm-9 col-xs-12">{subHeading}</h2>
        </div>
    
    )
}

export default SubHeader;