import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web'
import './GameOver.scss'

export const GameOver: React.FC = (): JSX.Element => {

  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        autoplay: true,
        loop: false,
        animationData: require('../../assets/endgame.json')

      })
    }

  })


  return (
    <div className="main-game-container" >

      <div className='game-over-container'>
        <div ref={container} className='animation-container' >
        </div>
        <h1
          className='game-over'> GAME OVER! </h1>
      </div >
    </div>
  )
}