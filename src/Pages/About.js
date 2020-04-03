import React from 'react';
//, { useState, useEffect}
import Header from './../components/header';
import Projects from './../components/projects';


import Me from './img/blue-me.svg';


export default function About() {
    

    return(
      
        <div className="container">
            <div className="row col-sm-12">
                <Header
                    heading={'About me:'}
                    headerTXT={'Hi, my name is Merethe.'}
                    subTXT={`I’m a Oslo based frontend development second year student, with a BA in creative marketing communication.`}
                    headerLink={`Earlier- studies and work experience have given me a focus and interests of UX-design and visual kommunikation, as well as a customer(end-user) oriented-, analytical- and creative mind.
                                I’m a curious person, which led me to become a short-term nomad at one point in my life. This helped me to become more adaptable to various situations, and a more pragmatic and proactive person.
                                As I write this I’m doing my last semester at Noroff -school of technology and digital media, working and learning a lot as a student assistant- front-end developer at a startup (Homefair AS), as well as a couple of hours a week as a customer consultant selling EVO and other mediterranean food specialties.
                                So no secrets now, my hobbies are cooking, traveling, kulture and hiking in the beautiful outdoors.
                                
                                I’m now seeking full time work as a front-end developer preferably from mid June. `}
                />                  
            </div>
            <div className="row col-sm-12">
               <img scr={Me} alt="This is me"/> <h2>Curriculum vitae:</h2>
                <div className="col-sm-7 line"></div>
            </div>
            <Projects
                    heading={'Rosenlund barnehage'}
                    subHeading={`New website:`}
                    intro={'This project was done for Rosenlund Barnehage, integrated into my project exam for semester two of four.'} 
                    introTXTHeading={`Introduction…`}
                    introTXT={`Rosenlund barnehage wanted a brand new/a complete overhaul of their existing website. The main goal of making a new website is to give potential customers a feeling that Rosenlund barnehage is a professional establishment, that takes care of your children and are a safe place for the kids to learn and evolve.
                            Secondly the goal is to fill the empty spots/spaces available.
                            The website should be user friendly, reliable and a informative source for customers and potential customers.`} 
                    hastag={`# HTML5, CSS, Javascript, Web Design/Graphic Design`} 
                    projectLink={'Click here to take a closer look'}
                    projectImg={''}
            />
           
        </div>
    )
}
