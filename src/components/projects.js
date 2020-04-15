import React from 'react';
//import { NavLink } from 'react-router-dom';


const Projects = (props) => {
    const { heading, subHeading, intro, introTXTHeading,introTXT, hastag, projectImg, reverse } = props;

    return(
      
        <div className="col-sm-12 projects container">
            <div className={reverse}>
                <div className="row  projects-txt">
                    <h3>{heading}</h3> 
                    <h3>{subHeading}</h3> 
                    <h4>{intro}</h4>
                    <p>{introTXTHeading}</p>
                    <p>{introTXT}</p>
                    <p className="hastag">{hastag}</p>
                </div>
                <div className="row projects-img">
                    <img alt="Project example" src={projectImg}/>
                </div>
            </div>
        </div>
    
    )
}

export default Projects;
//<img className="signature" alt="mm-logo-b.svg" src="/./../images/mm-logo-b.svg"/>