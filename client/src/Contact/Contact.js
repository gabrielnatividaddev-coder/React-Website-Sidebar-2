import React from 'react';
import './Contact.css';
import { Button } from '@mantine/core';
import profile from '../assets/javier.png';
class Contact extends React.Component {
  render(){
    return <div className='aboutouterdiv'>
            <div className='aboutdiv'>
              <img className='aboutpic' src={profile}></img>
              <p>
                Lorem Ipsum
                "Neque porro quisquam est qui dolorem ipsum               </p>
            </div>  
      </div> 
      ;
  }
}

export default Contact;