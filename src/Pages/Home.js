import React from 'react';
//import { NavLink } from 'react-router-dom';

//, { useState, useEffect}
import Header from './../components/header';
import Projects from './../components/projects';

import ProjectImg1 from './img/thrones.png';
import ProjectImg2 from './img/homefair-logo_MM-B1-8.png';
import ProjectImg3 from './img/homefair.png';
import ProjectImg4 from './img/Rosenlund-Barnehage.png';



export default function Home() {
    

    return(
      
        <div className="container home-container">
            <div className="row col-sm-12">
                <Header
                    heading={'Velkommen'}
                    headerTXT={'Hi, my name is Merethe.'}
                    subTXT={`I'm a Oslo based frontend development second year student, with a BA in creative marketing communication. On this website you can take a look at some projects and`}
                    headerLink={' read more about me.'}
                />                  
            </div>
            <div className="row col-sm-12">
                <h2>Take a look at my work:</h2>
                <div className="col-sm-7 line"></div>
            </div>
      
              <Projects
                        heading={'Thrones- The board game'}
                        intro={'Project exam for semester three. Game of thrones inspired board game'} 
                        introTXTHeading={`The assignment`}
                        introTXT={`Create a online board game for Game of Thrones. Using HTML CSS Frameworks, JavaScript
                                    and knowledge from Design 2. The board game will have a character selection page, a board game page and a final page/modal-popup to display winner.`} 
                        hastag={'# HTML5, CSS, Javascript, Web Design/Graphic Design'} 
                        projectImg={ProjectImg1}
                />
                <div className="col-sm-12 projects-link">
                    <div className="col-sm-9 line"></div>
                    <a className="col-sm-3" href="http://mermyr.com/merethe/2019-12-12-SemesterProject2-Merethe-Myrhaug/"  target="blank">Click here to take a closer look</a>
                </div>

              <Projects
                        reverse={'reverse'}
                        heading={'Homefair- Logo'}
                        intro={'Homefair AS wanted to use the logo I made for them in the final assignment for the Design 2 course.'} 
                        introTXT={'Look at the logo in use and reed more about Homefair'} 
                        hastag={'# Graphic Design'} 
                        projectImg={ProjectImg2}
                />
                <div className="col-sm-12 projects-link reverse">
                    <div className="col-sm-9 line"></div>
                    <a className="col-sm-3" href="http://mermyr.com/merethe/2019-11-04-MA3-design2_HomeFair-MeretheMyrhaug/homefair-designSystem.html#logo"  target="blank">Look at the logo</a>
                </div>

              <Projects
                        heading={'HomeFair (startup): Design system, Home page, popup modals and result page'}
                        intro={'Final assignment for the Design 2 course, assignment from the startup HomeFair'} 
                        introTXTHeading={`The assignment`}
                        introTXT={`To make the home page with pop up modal and the result page for HomeFair. Using components from the
                                    Design System created for the client's website combined with given material from the client. Look at the design system`} 
                        hastag={'# HTML5, CSS, Javascript, Web Design/Graphic Design'} 
                        projectImg={ProjectImg3}
                 />
                <div className="col-sm-12 projects-link">
                    <div className="col-sm-9 line"></div>
                    <a className="col-sm-3" href="http://mermyr.com/merethe/2019-11-11-Design2CA-MeretheMyrhaug/homeFair-index.html" target="blank">Click here to take a closer look</a>
                </div>

                <Projects
                        reverse={'reverse'}
                        heading={'Rosenlund barnehage'}
                        subHeading={`New website:`}
                        intro={'This project was done for Rosenlund Barnehage, integrated into my project exam for semester two of four.'} 
                        introTXTHeading={`The assignment`}
                        introTXT={`Rosenlund barnehage wanted a brand new/a complete overhaul of their existing website. The main goal of making a new website is to give potential customers a feeling that Rosenlund barnehage is a professional establishment, that takes care of your children and are a safe place for the kids to learn and evolve.
                                Secondly the goal is to fill the empty spots/spaces available.
                                The website should be user friendly, reliable and a informative source for customers and potential customers.`} 
                        hastag={`# HTML5, CSS, Javascript, Web Design/Graphic Design`} 
                        projectImg={ProjectImg4}
                />
                <div className="col-sm-12 projects-link reverse">
                    <div className="col-sm-9 line"></div>
                    <a className="col-sm-3" href="http://mermyr.com/merethe/2019-05-13-ProjectExam-MeretheMyrhaug-WebsiteRB/Rosenlund-Barnehage.html"  target="blank">Click here to take a closer look</a>
                </div>
        </div>
    )
}
