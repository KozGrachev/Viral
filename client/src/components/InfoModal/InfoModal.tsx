import React, { useState } from 'react';
import './InfoModal.css';


export const InfoModal: React.FC = () => {

  const onClose = () => {

  };

  return (
    <div className='modal_container'>
      <div className='modal_header'>
        <p>Game Rules</p>
        <span className='close-btn'>X</span>
      </div>
      <div className='modal_content'>
        <div className='modal_body'>
          <h4>Need help?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            sit eum odio necessitatibus laudantium excepturi quasi explicabo
            voluptatem neque porro?
          </p>
        </div>
        <div className='modal_footer'>
          <button className='btn_cancel'>Close</button>
        </div>
      </div>
    </div>
  );
};
