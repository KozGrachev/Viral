import { Component } from 'react'
import { GameState, UPDATE_GAME_STATE, GameStateActionTypes } from '../../types/gameStateTypes'


export function updateGameSate(gameState: GameState): GameStateActionTypes {
  
  return {
    type: UPDATE_GAME_STATE,
    payload:gameState
  }
}
export function movePlayerAction(gameState: GameState): GameStateActionTypes {
  
  return {
    type: UPDATE_GAME_STATE,
    payload:gameState
  }
}




