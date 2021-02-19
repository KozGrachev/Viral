import React from 'react';
import './InfoModal.scss';

export const InfoModal: React.FC = () => {
  return (

    <div className='modal_body'>
      <h4>Welcome to Viral!</h4>
      <p className='text'>
        In this game you have to travel around town cleaning up misinformation from various sources.
        You can either travel to an adjacent source or fast travel by using one of your cards. Each player can make 4 actions, either moving or cleaning, on each turn.
        After each turn additional misinformation will spread throughout the town so you’ll have to act quickly!
        The amount of misinformation which spreads each turn depends on the spread level. If a third marker of misinformation is put on a source there is an outbreak spreading it to adjacent sources.
        Each outbreak increases the chaos meter!
        After each turn the player also collects two source cards. The spread increases each time one of those source cards turns out to be one of the 3 hidden Viral cards!
        To win you must debunk all three types of misinformation.
        Each type of misinformation is debunked by collection 4 source cards representing that type of misinformation.
        The game is over if the chaos meter increases to 100%, you run out of source cards or if you run out of any type of misinformation marker.
        Good luck!
          </p>
    </div>



  );
};