import React from 'react';
//, { useState, useEffect}
import Header from './../components/header';


//import Me from './me-original.png';
import SubHeader from '../components/subHeader';
import CvSection from '../components/cvSection';


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
           
            <SubHeader
                    imgTXT={'This is me'} 
                    subHeading={'Curriculum vitae:'}
            />
            <CvSection
                     heading={'Personalia:'}
                     infoTXTHeading={'Address:'} 
                     infoTXT={'0352 Oslo, Norway'} 
                     info2TXTHeading={'E-mail:'} 
                     info2TXT={'merethe.myrhaug@gmail.com'} 
                     info3TXTHeading={'Nationality:'} 
                     info3TXT={'Norwegian'} 
                     info4TXTHeading={'Civil status:'} 
                     info4TXT={'Unmarried'} 
            />
             <CvSection
                     heading={'Education:'}
                     infoTXTHeading={'Address:'} 
                     infoTXT={'0352 Oslo, Norway'} 
                     info2TXTHeading={'E-mail:'} 
                     info2TXT={'merethe.myrhaug@gmail.com'} 
                     info3TXTHeading={'Nationality:'} 
                     info3TXT={'Norwegian'} 
                     info4TXTHeading={'Civil status:'} 
                     info4TXT={'Unmarried'} 
            />
             <CvSection
                     heading={'Work experience: '}
                     infoTXTHeading={'Address:'} 
                     infoTXT={'0352 Oslo, Norway'} 
                     info2TXTHeading={'E-mail:'} 
                     info2TXT={'merethe.myrhaug@gmail.com'} 
                     info3TXTHeading={'Nationality:'} 
                     info3TXT={'Norwegian'} 
                     info4TXTHeading={'Civil status:'} 
                     info4TXT={'Unmarried'} 
            />
             <CvSection
                     heading={'Skills / Other:'}
                     infoTXTHeading={'Address:'} 
                     infoTXT={'0352 Oslo, Norway'} 
                     info2TXTHeading={'E-mail:'} 
                     info2TXT={'merethe.myrhaug@gmail.com'} 
                     info3TXTHeading={'Nationality:'} 
                     info3TXT={'Norwegian'} 
                     info4TXTHeading={'Civil status:'} 
                     info4TXT={'Unmarried'} 
            />
           
        </div>
    )
}
/* <div className="row col-sm-12">
                <p>This is me</p>
               <img scr={Me} alt="This is me"/> <h2>Curriculum vitae:</h2>
                <div className="col-sm-7 line"></div>
            </div>*/