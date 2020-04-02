import React from 'react';

import 'bootstrap3/dist/css/bootstrap.min.css';
import './scss/styles.scss'
import Nav from './components/nav'
import Footer from './components/footer'


export default function App(props) {

  return( 
        <>
          <Nav 
              logo={"/./scss/images/meretheMyrhaugB-W_3.png"}
              home={'Home'}
              about={'About/CV'}
              contact={'Contact'}
            />  

{props.children}

          <Footer
                logo={"./../images/meretheMyrhaugB-W_3.png"}
          />
         
        </>   
  )
}