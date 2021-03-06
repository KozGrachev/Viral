import React, { useEffect, useState } from 'react';
import { SourceCard } from '../SourceCard/SourceCard';
import { Card } from '../../types/gameStateTypes';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { discardCardAction } from '../../redux/gameState/gameStateActions';
import { RootState } from '../../redux/gameState/store';

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
  closeModal: () => void,
  discardableCards: Card[]
}

interface CardWithId extends Card {
  id: string
}

export function DiscardModal ({ 
  modalIsOpen, closeModal, 
  discardableCards }: ModalProps) {
  const dispatch = useDispatch();
  const gamestate = useSelector((state: RootState) => state.gameStateReducer);
  const currentPlayer = useSelector((state: RootState) => state.gameStateReducer.players.filter(player => player.isCurrent === true))[0];
  
  const [pickedCards, setpickedCards] = useState<CardWithId[]>([]);

  const discardableCardsWithIdInit: CardWithId[] = discardableCards.map((card) => {
    (card as CardWithId).id = uid();
    return card;
  }) as CardWithId[];

  const [discardableCardsWithId, setDiscardableCardsWithId] = useState(discardableCardsWithIdInit);

  function uid (rounds = 1) {
    let uid = '';
    while (rounds > 0) {
      uid += Math.random().toString(32).substring(2, 10);
      rounds -= 1;
    }
    return uid;
  }

  function sendcloseModal (e: any) {
    e.preventDefault();
    const pickedCardsAsCard: Card[] = pickedCards.map((cardWithId) => {
      const card: Card = { cardType: cardWithId.cardType, sourceName: cardWithId.sourceName, misinfoType: cardWithId.misinfoType };
      return card;
    }) as Card[];
    dispatch(discardCardAction({ 
      oldState: gamestate, 
      currentPlayerID: currentPlayer.id, 
      discardedCard: pickedCardsAsCard[0].sourceName }));
    closeModal();
  }
  function sendCloseModal (e: any) {
    e.preventDefault();
    closeModal();
  }

  const clickOnCard = (e: React.MouseEvent<HTMLElement>, card: CardWithId) => {
    const div = e.currentTarget as HTMLInputElement;
    const discardModalCards = document.getElementsByClassName('discard-modal-card');
    if (!div.classList.contains('discardableCard')) {
      for (let i = 0; i < discardModalCards.length; i++) {
        discardModalCards[i].classList.remove('discardableCard');
      }
      div.classList.add('discardableCard');
      setpickedCards(prev => [card]);
    } else {
      div.classList.remove('discardableCard');
      setpickedCards([]);
    }
  };

  return (
    <div>
      <ReactModal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={sendCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        

        {discardableCardsWithId.map((card, index) => 
          <div 
            style={{ height: 50, borderWidth: 'solid', margin: '20px' }} 
            key={index}
            onClick={(e) => clickOnCard(e, card)}
            className={'discard-modal-card'} 
          >
            <SourceCard 
              name={card.sourceName} 
              category={card.cardType} 
              canShare={[]}
            />
          </div>)}
        {pickedCards.length === 1 ? 
          <button onClick={sendcloseModal}>
            Discard this card
          </button> :
          <div>you have {discardableCards.length} cards. Please discard one...</div>
        }
      </ReactModal>
    </div>
  );
}