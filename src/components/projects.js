import React , { useState} from 'react';
//import { NavLink } from 'react-router-dom';


const Projects = (props) => {
    const { heading, subHeading, intro, introTXTHeading,introTXT, hastag, projectImg, reverse } = props;
    const [toggleIntro, setTogglIntro] = useState(false);
    const [toggleDefeat, setToggleDefeat] = useState(false);
   
    const toggleFunc = (e) => {
        e.preventDefault();
        (e.target.id === 'intro')?setTogglIntro(!toggleIntro): setToggleDefeat(!toggleDefeat);
    };

    return(
      
        <div className="col-sm-12 projects container">
            <div className={reverse}>
                <div className="row  projects-txt">
                    <h3>{heading}</h3> 
                    <h3>{subHeading}</h3> 
                    <h4>{intro}</h4>
                    <p id="intro" onClick={toggleFunc}>{introTXTHeading} <i className="fas fa-sort-down"></i></p>
                    <p className={(toggleIntro) ? 'show animated flipInX slow-1s' : 'hide'}>{introTXT}</p>
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