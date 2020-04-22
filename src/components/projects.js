import React , { useState} from 'react';

const Projects = (props) => {
    const { heading, subHeading, intro, introTXTHeading,introTXT, hastag, projectImg, reverse, icon, logoLink, logoLinkTXT } = props;
    const [toggleIntro, setTogglIntro] = useState(false);
    const [toggleDefeat, setToggleDefeat] = useState(false);
   
    const toggleFunc = (e) => {
        e.preventDefault();
        (e.target.id === 'intro')?setTogglIntro(!toggleIntro): setToggleDefeat(!toggleDefeat);
    };

    return(
      
            <div className={`col-sm-12 projects container ${reverse} `}>
                <div className="row col-sm-6 col-xs-12 projects-txt">
                    <h3>{heading}</h3> 
                    <h3>{subHeading}</h3> 
                    <h4>{intro}</h4>
                    <p id="intro" onClick={toggleFunc}>{introTXTHeading} <i className={icon}></i></p>
                    <p className={(toggleIntro) ? 'show animated flipInX slow-1s' : 'hide'}>{introTXT}</p>
                    <a className="logoLink" href={logoLink}>{logoLinkTXT}</a>
                    <p className="hastag">{hastag}</p>
                </div>
                <div className="row col-sm-6 col-xs-12 projects-img">
                    <img alt="Project example" src={projectImg}/>
                </div>
            </div>  
    
    )
}

export default Projects;