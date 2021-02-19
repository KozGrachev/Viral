import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/gameState/store';
import { SourceCard } from '../SourceCard/SourceCard';
import { Card } from '../../types/gameStateTypes';
import ReactModal from 'react-modal';

//TODO



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
  setselectedDebunkCards: Function
}

interface CardWithId extends Card {
  id: string

}

export function ModalComponent({ modalIsOpen, closeModal, setselectedDebunkCards, }: ModalProps) {
  const playerId = useSelector((state: RootState) => state.playerStateReducer.id)

  const players = useSelector((state: RootState) => state.gameStateReducer.players)

  const [pickedCards, setpickedCards] = useState<CardWithId[]>([])


  const fakeCards: Card[] = [{ cardType: "connection", sourceName: "Instagram", misinfoType: "yellow" },
  { cardType: "connection", sourceName: "Instagram", misinfoType: "yellow" },
  { cardType: "connection", sourceName: "Instagram", misinfoType: "yellow" }]

  const fakeCardsWithIdInit: CardWithId[] = fakeCards.map((card) => {
    (card as CardWithId).id = uid()
    return card
  }) as CardWithId[]

  const [fakeCardsWithId, setfakeCardsWithId] = useState(fakeCardsWithIdInit)


  useEffect(() => {

  }, [pickedCards])


  function uid(rounds: number = 1) {
    let uid = '';
    while (rounds > 0) {
      uid += Math.random().toString(32).substring(2, 10);
      rounds -= 1;
    }
    return uid;
  }


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
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
      div.classList.add('selected')
      setpickedCards(prev => [...prev, fakeCard])

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

        {pickedCards.map((pickedCard, index) => <div style={{ height: 50, borderWidth: 'solid' }} key={index}
          onClick={(e) => clickOnCard(e, pickedCard)}>
          <SourceCard name={pickedCard.sourceName} category={pickedCard.cardType} canShare={[]} />

        </div>)}

        <div style={{ border: "1px solid black" }}></div>


        {fakeCardsWithId.map((fakeCard, index) => <div style={{ height: 50, borderWidth: 'solid' }} key={index}
          onClick={(e) => clickOnCard(e, fakeCard)}>
          <SourceCard name={fakeCard.sourceName} category={fakeCard.cardType} canShare={[]} />

        </div>)}
        <button onClick={sendcloseModal}>Send</button>
      </ReactModal>
    </div>
  );
}