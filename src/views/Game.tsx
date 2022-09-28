import { useEffect } from 'react'
import { useReduxDispatch, useReduxSelector } from '../utils/ReduxHooks'
import { resetGame } from '../store/slices/scoreReducer'
import { resetBoard } from '../store/slices/boardReducer'

import TopBar from '../components/game/TopBar'
import RoundInfo from '../components/game/RoundInfo'
import RoundResult from '../components/game/RoundResult'
import Board from '../components/game/Board'
import ScoreInfo from '../components/game/ScoreInfo'

import '../styles/Game.scss'

const Game = () => {
  const dispatch = useReduxDispatch()
  const { grid } = useReduxSelector(state => state.game)
  const { result } = useReduxSelector(state => state.board)

  /**
   * Reset the grid and the board every time the page is reloaded
   */
  useEffect(() => {
    dispatch(resetGame())
    dispatch(resetBoard({ round: 1, grid }))
  }, [dispatch, grid])

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
