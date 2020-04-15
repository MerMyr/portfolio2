import React from 'react';
//, { useState, useEffect}
import Header from './../components/header';


//import Me from './me-original.png';
import SubHeader from '../components/subHeader';
import CvSection from '../components/cvSection';


export default function About() {
    

    return(
      
        <div className="container about-container">
            <div className="row col-sm-12">
                <Header
                    heading={'About me:'}
                    subTXT={`I’m a Oslo based frontend development second year student, with a BA in creative marketing communication.`}
                    aboutTXT={`Earlier- studies and work experience have given me a focus and interests of UX-design and visual kommunikation, as well as a customer(end-user) oriented-, analytical- and creative mind.
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
                     reverse={'reverse'}
                     heading={'Education:'}
                     subHeading={'Higher education:'}
                     infoTXTHeading={'Noroff school of technology and digital media:'} 
                     infoTXT={'Frontend development. -Aug 2018- Juni 2020 (DD).'} 
                     info2TXTHeading={'Høyskolen Kristiania:'} 
                     info2TXT={'Advertising and brand communication/Bachelor of art: creative market communication. -Aug 2010-juni 2012 + Aug 2014- Jan 2017'} 
                     info3TXTHeading={'Primary- and high school:'} 
                     info3TXT={'Roald Amundsen VGS (Oppegård VGS)- Design GK, Art/design and colors VK1/VK2.'} 
                     info4TXT={'Ski ungdomsskole, Finstad barneskole.'} 
            />
            
             <CvSection
                     heading={'Work experience: '}
                     subHeading={'Homefair AS'}
                     infoTXT={'Student assistant- front-end developer.- 22.jan-DD'} 
                     subHeading2={'Olivenlunden 1830 (Oliviers&Co)'}
                     info2TXT={`Sep 2018 - DD: Part-time employee.
                                May 2017- Sep 2018: Assistant manager dep. CC Vest.
                                15 July 2014 – May 2017: Part-time Employee dep. Grünerløkka/Sandvika.`} 
                     subHeading3={'The Body Shop'}
                     info3TXT={'Okt. 2007- Sep.2013: Shop manager 100%, Makeup-manager 80%-100%, customer consultant part-time og 80%.'} 
                     info4TXTHeading={'Other:'} 
                     info4TXT={`Meny: 1 Mai 2013- 30 Juni 2014: Call staff /60% dep. Nordbyvn Ski – kolonial/kasse. 

                            Accessorize: April- Oct. 2014: Call staff/ part-time employee + 
                            14 Juni. 2011- Feb. 2012: Call staff/ part-time employee avd. Ski
                            
                            ICA Maxi/Ultra Mat Ski AS: Summer 2006-08. Checkout Clerk (Call staff/Part-/Full-time).`} 
            />
           
             <CvSection
                     reverse={'reverse'}
                     heading={'Skills / Other:'}
                     infoTXTHeading={'Additional skills:'} 
                     infoTXT={`HTML, CSS (SASS), Javascript, office pakken Adobe: XD, Illustrator, Indesign, Photoshop.`} 
                     info2TXTHeading={'Language:'} 
                     info2TXT={`Norwegian Bokmål (mother tongue).
                                English (proficient in language and writing)`} 
                     info3TXTHeading={'Other:'} 
                     info3TXT={'12. Sep 2013 - 27. Mars 2014- Backpacking.Driving license- Class B.'} 
                     info4TXTHeading={'References:'} 
                     info4TXT={'Multiple, available on request.'} 
            />
           
        </div>
    )
}
/* <div className="row col-sm-12">
                <p>This is me</p>
               <img scr={Me} alt="This is me"/> <h2>Curriculum vitae:</h2>
                <div className="col-sm-7 line"></div>
            </div>*/