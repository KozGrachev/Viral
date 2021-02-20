import React, { useState } from 'react';
import { SourceCard } from '../SourceCard/SourceCard';
import { Card } from '../../types/gameStateTypes';
import ReactModal from 'react-modal';

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
  closeModal: Function,
  setselectedDebunkCards: Function,
  debunkableCards: Card[]
}

interface CardWithId extends Card {
  id: string
}

export function ModalComponent({ modalIsOpen, closeModal, setselectedDebunkCards, debunkableCards }: ModalProps) {
  const [pickedCards, setpickedCards] = useState<CardWithId[]>([])

  const debunkableCardsWithIdInit: CardWithId[] = debunkableCards.map((card) => {
    (card as CardWithId).id = uid()
    return card
  }) as CardWithId[]

  const [debunkableCardsWithId, setDebunkableCardsWithId] = useState(debunkableCardsWithIdInit)

  function uid(rounds: number = 1) {
    let uid = '';
    while (rounds > 0) {
      uid += Math.random().toString(32).substring(2, 10);
      rounds -= 1;
    }
    return uid;
  }
  function afterOpenModal() { //? whats this intended for?
    // console.log('%c modal open...', 'background-color: lightblue')
  }

  function sendcloseModal(e: any) {
    e.preventDefault()

    const pickedCardsAsCard: Card[] = pickedCards.map((cardWithId) => {
      const card: Card = { cardType: cardWithId.cardType, sourceName: cardWithId.sourceName, misinfoType: cardWithId.misinfoType }
      return card
    }) as Card[]

    setselectedDebunkCards(pickedCardsAsCard)
    closeModal()
  }

  const clickOnCard = (e: React.MouseEvent<HTMLElement>, card: CardWithId) => {
    let div = e.target as HTMLInputElement; //! this is a different target depending on whether the icon, text, or containing div are clicked

    if (!div.classList.contains('selectedDebunkableCard')) {
      div.classList.add('selectedDebunkableCard')
      setpickedCards(prev => [...pickedCards, card])
    } else {
      div.classList.remove('selectedDebunkableCard')
      const filtered = pickedCards.filter(pickedCard => pickedCard.id !== card.id)
      setpickedCards(filtered)
    }
  }

  return (
    <div>
      <ReactModal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={sendcloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {debunkableCardsWithId.map((card, index) => <div style={{ height: 50, borderWidth: 'solid', margin: '20px' }} key={index}
            onClick={(e) => clickOnCard(e, card)}>
            <SourceCard name={card.sourceName} category={card.cardType} canShare={[]} />
          </div>)}
        {pickedCards.length === 4 ? 
          <button onClick={sendcloseModal}>Debunk {debunkableCardsWithId[0].misinfoType}</button> :
          <div>Select 4 cards to debunk {debunkableCardsWithId[0].misinfoType}...</div>
        }
      </ReactModal>
    </div>
  );
}