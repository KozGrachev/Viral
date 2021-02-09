import React from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/gameState/store';
import { SourceCard } from '../SourceCard/SourceCard';
import ReactDOM from 'react-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


interface ModalProps {
  modalIsOpen: boolean,
  setIsOpen: Function,
  setselectedDebunkCards: Function
}

export function ModalComponent({ modalIsOpen, setIsOpen, setselectedDebunkCards }: ModalProps) {
  const currentPlayerCards = useSelector((state: RootState) => state.playerStateReducer.cards)

  const gameState = useSelector((state: RootState) => state.gameStateReducer)




  const fakeCards = ['Card 1', 'Card 2', 'Card 3']


  var subtitle: any;



  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {fakeCards.map(card => <div>{card}</div>)}
      </Modal>
    </div>
  );
}