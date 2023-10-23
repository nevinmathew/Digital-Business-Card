import React from 'react';
import Image from './Components/Image';
import './App.css';
import BasicDetails from './Components/BasicDetails';
import BasicContacts from './Components/BasicContacts';
import About from './Components/About';
import Interests from './Components/Interests';
import Socials from './Components/Socials';

function App() {

  return (

    <div className="business-card-container">
      <div className='business-card'>
        <Image />
        <div className='details'>
          <BasicDetails/>
          <BasicContacts/>
          <About/>
          <Interests/>
          <Socials/>          
        </div>
      </div>
    </div>
    
  )
}

export default App;