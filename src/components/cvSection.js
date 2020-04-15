import React from 'react';

const CvSection = (props) => {
    const { heading, subHeading, intro, infoTXTHeading, infoTXT, subHeading2, info2TXTHeading, info2TXT, subHeading3, info3TXTHeading, info3TXT, info4TXTHeading, info4TXT, info5TXTHeading, info5TXT, reverse } = props;

    return(
      
        <div className="col-sm-12 cv-container">
            <div className={reverse}>
                <div className="row col-sm-12 cv-txt-container">
                    <div className="cv-txt">
                        <h2>{heading}</h2> 
                        <h3>{subHeading}</h3> 
                        <h4>{infoTXTHeading}</h4>
                        <p>{infoTXT}</p>
                        <h3>{subHeading2}</h3> 
                        <h4>{info2TXTHeading}</h4>
                        <p>{info2TXT}</p>
                        <h3>{subHeading3}</h3> 
                        <h4>{info3TXTHeading}</h4>
                        <p>{info3TXT}</p>
                        <h4>{info4TXTHeading}</h4>
                        <p>{info4TXT}</p>
                        <h4>{info5TXTHeading}</h4>
                        <p>{info5TXT}</p>
                        <p>{intro}</p>
                    </div>
                   <hr/>
                </div>
            </div>
        </div>
    
    )
}

export default CvSection;
//<img className="signature" alt="mm-logo-b.svg" src="/./../images/mm-logo-b.svg"/>