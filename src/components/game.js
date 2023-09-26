import './game.css'
import { winner } from '../helper'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectDraw,
  selectCellsArray,
  selectPlayer,
  selectCurrentMove,
} from '../selectors'
import { movePlayer, START_NEW_GAME, playerWin, actionDraw } from '../actions'
import { PLAYER, PLAYER_ACTION } from '../constants'

export const Game = () => {
  const cellsArray = useSelector(selectCellsArray)
  const player = useSelector(selectPlayer)
  const currentMove = useSelector(selectCurrentMove)
  const draw = useSelector(selectDraw)
  const dispatch = useDispatch()

  const startNewGame = () => {
    dispatch(START_NEW_GAME)
  }

  const handleClick = (index) => {
    let currentPlayer

    if (cellsArray[index] === null && !winner(cellsArray)) {
      if (player) {
        cellsArray[index] = PLAYER.CROSS
      } else {
        cellsArray[index] = PLAYER.NOUGHT
      }
      currentPlayer = !player
    } else {
      return
    }
    dispatch(movePlayer(currentPlayer))

    if (winner(cellsArray)) {
      dispatch(playerWin({ player, currentMove: PLAYER_ACTION.WIN }))
    }
    if (!winner(cellsArray) && !cellsArray.includes(null)) {
      dispatch(actionDraw(true))
    }
  }

  const isMove = () => {
    return draw ? (
      <div className="whoseMove">{PLAYER_ACTION.DRAW}</div>
    ) : (
      <div className="whoseMove">
        {currentMove} {player ? PLAYER.CROSS : PLAYER.NOUGHT}
      </div>
    )
  }
  return (
    <div className="wrapper">
      <button className="start__btn" onClick={startNewGame}>
        Начать заново
      </button>
      <div className="container">
        {cellsArray.map((square, i) => (
          <button key={i} className="square" onClick={() => handleClick(i)}>
            {square}
          </button>
        ))}
      </div>
      <div className="info">Информация</div>
      {isMove()}
    </div>
  )
}
