import React from 'react';
import "./PlayerPrompt.css"

export interface PlayerPromptProps {
  msg: string

}


export const PlayerPrompt: React.FC = () => { // SVGIcon
  // using redux instead of props for real implementation
  //const gamestate = useSelector(state => state.gamestate) 
  //const msg = gamestate.messages


  const messages = ['this is a test message' , 'Bratuwurst?', ' ja bitte Bratwurst', 'Donald Trump is Tupac and lives under Connors head']
  //messages.push(msg)
  return (
    <div className="player-prompt-container" >
      {messages.map(msg => {return (
        <div className="single-message">{msg}</div>)
      })}

    </div>
  )
}