import React,{useState} from 'react';
import {messages} from '../../logic/actions.newState_CO'
import {Gamestate} from '../../types/gameStateTypes'

import "./PlayerPrompt.scss"

export interface PlayerPromptProps {
  state:Gamestate
}


export const PlayerPrompt: React.FC<PlayerPromptProps> = ({state}:PlayerPromptProps) => { // SVGIcon

  return (
    <div className="player-prompt-container" >
      {messages.map(msg => {
        let player = state.players.filter(player => {
          if (msg.search(player.name) !== -1 ) {
            return player 
          }})[0]
        return (
        <div className="single-message" style = {{border:`2px solid ${player.pawnColor}`}}>{msg}</div>)
      })}

    </div>
  )
}