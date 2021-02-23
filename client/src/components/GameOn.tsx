
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/gameState/store';
import { CureDeck } from '../components/CureDeck/CureDeck';
import { getIcon } from '../helpers/iconExporter';
import { CardHand } from '../components/CardHand/CardHand';
import { SourceDeck } from '../components/sourceDeck/sourceDeck';
import { MarkersStore } from '../components/MarkersStore/MarkersStore';
import { MisinformationDeck } from '../components/MisinformationDeck/misinformationDeck';
import { ChaosMeter } from '../components/ChaosMeter/ChaosMeter';
import { SpreadLevel } from '../components/SpreadLevel/SpreadLevel';
import { PlayerPrompt } from '../components/PlayerPrompt/PlayerPrompt';
import { SourceParent } from '../components/SourceParent/SourceParent';
import { DealCardsToNewPlayerAction } from '../redux/gameState/gameStateActions';
import { Gamestate } from '../types/gameStateTypes';
import { OtherPlayer } from './OtherPlayer/OtherPlayer';
import Modal from 'react-modal';
import { InfoModal } from './InfoModal/InfoModal';
import './InfoModal/InfoModal.scss';
interface Props {
  rendered: boolean
}
export const GameOn: React.FC<Props> = ({ rendered }): JSX.Element => {
  const state = useSelector((state: RootState) => state.gameStateReducer);
  const dispatch = useDispatch();
  const player = useSelector((state: RootState) => state.playerStateReducer);
  const [modal, updateModal] = useState(false);
  const getCards = () => {
    dispatch(DealCardsToNewPlayerAction({ player, state }));
  };

  const checkCards = (newstate: Gamestate) => {
    for (const PLAYER of newstate.players) {
      if (PLAYER.id === player.id) {
        const p = PLAYER.cards;
        const card = p[0];
        if (!card) {
          return true;
        }
      }
    }
    return false;
  };

  const openModal = () => {
    updateModal(true);
  };
  const closeModal = () => {
    updateModal(false);
  };
  const InfoIcon = getIcon('infoIcon');

  const ConnectionsWithFrame = getIcon('connectionsWithFrame');

  return (
    <div>
      { (rendered && state.gameOn) &&
        <div className="app-outer-wrapper">
          <div className="app-container">

            <div className="sidebar left">
              {(checkCards(state) === true && state.turnMovesLeft > 3) ?
                <button
                  className='get-cards'
                  onClick={getCards}> GET CARDS </button>
                :
                <CardHand />
              }
              <PlayerPrompt state={state} />
            </div>
            <div className="board-container">
              <div id="game-board">
                <ConnectionsWithFrame className="connections-overlay" />
                <SourceParent />
                <OtherPlayer />
              </div>
              <SourceDeck />
              <MisinformationDeck />
              <MarkersStore />

            </div>
            <div className="sidebar right">
              <div className="info-icon">
                <InfoIcon onClick={openModal} />
              </div>
              <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                contentLabel="Game rules"
                className="mymodal"
                overlayClassName='overlayClassName'
                ariaHideApp={false}
              >
                <InfoModal />
                <button className='modal_button' onClick={closeModal}>close</button >
              </Modal>
              <ChaosMeter />
              <SpreadLevel />
              <CureDeck />
            </div>
          </div>
        </div>
      }
    </div >
  );
};
