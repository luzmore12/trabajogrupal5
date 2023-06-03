import React from 'react';
import Slider from './ImageSliderm1';
import SocialButtons from './botonredes';






function Mainindex() {
  return (
    <div className='mainindex'>
      <div className="firstsection">                        
        < Slider/>
      </div>
      <div className="secondsection">
        <SocialButtons/>  
               
      </div>
               
    
    </div>
  );
}

export default Mainindex;
