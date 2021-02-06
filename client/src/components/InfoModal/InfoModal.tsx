import React, { useState } from 'react';
import './InfoModal.css';

export interface InfoModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  title,
  isOpen,
}: InfoModalProps) => {
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
