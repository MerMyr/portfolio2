import React from 'react';
//, { useState, useEffect}
import Header from './../components/header';
import Projects from './../components/projects';

export default function Home() {
    

    return(
      
        <div className="container">
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
              <Projects
                    heading={''}
                    intro={''} 
                    introTXT={''} 
                    hastag={''} 
                    projectLink={''}
                    projectImg={''}
            />
              <Projects
                    heading={''}
                    intro={''} 
                    introTXT={''} 
                    hastag={''} 
                    projectLink={''}
                    projectImg={''}
            />
              <Projects
                    heading={''}
                    intro={''} 
                    introTXT={''} 
                    hastag={''} 
                    projectLink={''}
                    projectImg={''}
            />

           
        </div>
    )
}
