import { clearMisinfoAction, debunkMisinfoAction, moveAction, shareCardAction, discardCardAction } from '../redux/gameState/gameStateActions'
import { useDispatch } from 'react-redux'
import { ClearmisinfoProps, DebunkMisinfoProps, discardCardProps, MoveActionProps, ShareCardProps } from '../redux/gameState/reduxTypes';
// eslint-disable-next-line react-hooks/rules-of-hooks
const dispatch = useDispatch();
//set up the types for the action  & the action props // set up the action/ dispatch action/ set up the reducer 
export const moveActionEvent = (props: MoveActionProps) => {
  dispatch(moveAction(props))
}
export const clearMisinfoEvent = (props: ClearmisinfoProps) => {
  dispatch(clearMisinfoAction(props))
}
export const shareCardEvent = (props: ShareCardProps) => {
  dispatch(shareCardAction(props))
}
export const debunkMisinfoEvent = (props: DebunkMisinfoProps) => {
  dispatch(debunkMisinfoAction(props))
}
export const discardCardEvent = (props: discardCardProps) => {
  dispatch(discardCardAction(props))
}