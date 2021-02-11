import React, { useState } from 'react';
import './InfoModal.scss';


export const InfoModal: React.FC = () => {


  const onClose = () => {

  };

  return (

    <div className='modal_body'>
      <h4>Welcome to Viral!</h4>
      <p className='text'>
        <div className='rule'>
          <div> 1 </div>
          <p>In this game you have to travel around town cleaning up misinformation from various sources.
        </p>
        </div>
        <div>
          <div> 2 </div>
          <p>
            In this game you have to travel around town cleaning up misinformation from various sources.
        </p>
        </div>
        <div>
          <div> 3 </div>
          <p>
            After each turn additional misinformation will spread throughout the town so you’ll have to act quickly!
        </p>
        </div>
        The amount of misinformation which spreads each turn depends on the spread level. If a third marker of misinformation is put on a source there is an outbreak spreading it to adjacent sources.
        Each outbreak increases the chaos meter!
        After each turn the player also collects two source cards. The spread increases each time one of those source cards turns out to be one of the 3 hidden Viral cards!
        To win you must debunk all three types of misinformation.
        Each type of misinformation is debunked by collection 4 source cards representing that type of misinformation.
        The game is over if the chaos meter increases to 100%, you run out of source cards or if you run out of any type of misinformation marker.
        Good luck!
          </p>
    </div >



  );
};