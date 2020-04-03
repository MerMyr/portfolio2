import React from 'react';

const CvSection = (props) => {
    const { heading, subHeading, intro, infoTXTHeading, infoTXT, info2TXTHeading, info2TXT, info3TXTHeading, info3TXT, info4TXTHeading, info4TXT, info5TXTHeading, info5TXT } = props;

    return(
      
        <div className="col-sm-12 cv">
            <div className="row col-sm-6 cv-txt">
                <h2>{heading}</h2> 
                <h3>{subHeading}</h3> 
                <h4>{infoTXTHeading}</h4>
                <p>{infoTXT}</p>
                <h4>{info2TXTHeading}</h4>
                <p>{info2TXT}</p>
                <h4>{info3TXTHeading}</h4>
                <p>{info3TXT}</p>
                <h4>{info4TXTHeading}</h4>
                <p>{info4TXT}</p>
                <h4>{info5TXTHeading}</h4>
                <p>{info5TXT}</p>
                <p>{intro}</p>
            </div>
            <div className="col-sm-12 cv-link">
                <div className="col-sm-9 line"></div>
            </div>
        </div>
    
    )
}

export default CvSection;
//<img className="signature" alt="mm-logo-b.svg" src="/./../images/mm-logo-b.svg"/>