import React,{useEffect, useRef} from 'react';
import {messages} from '../../logic/moves'
import { Gamestate } from '../../types/gameStateTypes'

import "./PlayerPrompt.scss"

export interface PlayerPromptProps {
  state:Gamestate
}


export const PlayerPrompt: React.FC<PlayerPromptProps> = ({state}:PlayerPromptProps) => {
  const h1Ref = useRef<HTMLHeadingElement>(null);


  const scrollToBottom = () => {
    h1Ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  useEffect(() => {
    scrollToBottom()
    
  }, [state])



  return (
    <div className="player-prompt-container" >
      {messages.map(msg => {
        let player = state.players.filter(player => {
          if (msg.search(player.name) !== -1 ) {
            return player 
          }})[0]
        return (
          <div className="single-message"
            style={{ border: `2px solid ${player.pawnColor}` }}>{msg}</div>)
      })}
      

      <div ref={h1Ref}></div>
    </div>
  )
}