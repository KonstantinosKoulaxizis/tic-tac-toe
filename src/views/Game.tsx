import { useEffect } from 'react'
import { useReduxDispatch, useReduxSelector } from '../utils/ReduxHooks'
import { resetGame } from '../store/slices/scoreReducer'
import { resetBoard, addMove, setDisabled } from '../store/slices/boardReducer'
import { O_MARK } from '../utils/Constants'
import { calculateAiMove } from '../utils/GameUtils'

import TopBar from '../components/game/TopBar'
import RoundInfo from '../components/game/RoundInfo'
import RoundResult from '../components/game/RoundResult'
import Board from '../components/game/Board'
import ScoreInfo from '../components/game/ScoreInfo'

const Game = () => {
  const dispatch = useReduxDispatch()
  const { grid, aiPlayer } = useReduxSelector(state => state.game)
  const { result, turn, board } = useReduxSelector(state => state.board)

  /**
   * Reset the grid and the board every time the page is reloaded
   */
  useEffect(() => {
    dispatch(resetGame())
    dispatch(resetBoard({ round: 1, grid }))
  }, [grid, dispatch])

  /**
   * In case of O mark's turn and aiPlayer is active
   * When aiPlayer is paying disable the board until the move is made
   */
  useEffect(() => {
    if (aiPlayer && turn === O_MARK && !result) {
      dispatch(setDisabled(true))
      const aiMove = calculateAiMove(board)

      setTimeout(() => {
        if (aiMove) {
          dispatch(addMove(aiMove))
          dispatch(setDisabled(false))
        }
      }, 800)
    }
  }, [aiPlayer, turn, board, result, dispatch])

  return (
    <div className='game'>
      <TopBar />
      {result ? <RoundResult /> : <RoundInfo />}
      <Board />
      <ScoreInfo />
    </div>
  )
}

export default Game
