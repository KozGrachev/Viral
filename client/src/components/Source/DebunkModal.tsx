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

  const [fakeCardsWithId, setfakeCardsWithId] = useState(debunkableCardsWithIdInit)

  function uid(rounds: number = 1) {
    let uid = '';
    while (rounds > 0) {
      uid += Math.random().toString(32).substring(2, 10);
      rounds -= 1;
    }
    return uid;
  }
  function afterOpenModal() { //? whats this intended for?
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

  const clickOnCard = (e: React.MouseEvent<HTMLElement>, fakeCard: CardWithId) => {
    let div = e.target as HTMLInputElement;

    if (!div.classList.contains('selected')) {
      div.classList.add('selected')               //? reason for card duplication?
      setpickedCards(prev => [...pickedCards, fakeCard])
    } else {
      div.classList.remove('selected')
      const filtered = pickedCards.filter(card => card.id !== fakeCard.id)
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

        {pickedCards.map((pickedCard, index) => <div style={{ height: 50, borderWidth: 'solid', borderColor: 'red', backgroundColor: 'red', margin: '20px' }} key={index} >
          <SourceCard name={pickedCard.sourceName} category={pickedCard.cardType} canShare={[]} />
        </div>)}
        <div style={{ border: "1px solid black", margin: '20px' }}></div>
        {fakeCardsWithId.map((fakeCard, index) => <div style={{ height: 50, borderWidth: 'solid', margin: '20px' }} key={index}
          onClick={(e) => clickOnCard(e, fakeCard)}>
          <SourceCard name={fakeCard.sourceName} category={fakeCard.cardType} canShare={[]} />
        </div>)}
        {pickedCards.length === 4 ? 
          <button onClick={sendcloseModal}>Debunk {fakeCardsWithId[0].misinfoType}</button> :
          <div>Select 4 cards to debunk {fakeCardsWithId[0].misinfoType}...</div>
        }
      </ReactModal>
    </div>
  );
}