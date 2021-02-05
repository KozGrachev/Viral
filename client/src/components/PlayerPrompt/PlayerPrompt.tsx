import React from 'react';
import "./PlayerPrompt.css"

export interface PlayerPromptProps {
  msg: string

}


export const PlayerPrompt: React.FC<PlayerPromptProps> = ({ msg }: PlayerPromptProps) => { // SVGIcon
  // using redux instead of props for real implementation
  //const gamestate = useSelector(state => state.gamestate) ...


  const messages = ['']
  messages.push(msg)
  return (
    <div className="player-prompt-container" >
      {messages.map(msg => {return (
        <div className="single-message">{msg}</div>)
      })}

    </div>
  )
}