import { useEffect } from 'react'
import { useReduxDispatch, useReduxSelector } from '../utils/ReduxHooks'
import { resetGame } from '../store/slices/scoreReducer'
import { resetBoard } from '../store/slices/gameReducer'

import TopBar from '../components/game/TopBar'
import RoundInfo from '../components/game/RoundInfo'
import RoundResult from '../components/game/RoundResult'
import Board from '../components/game/Board'
import ScoreInfo from '../components/game/ScoreInfo'

import '../styles/Game.scss'

const Game = () => {
  const dispatch = useReduxDispatch()
  const { result } = useReduxSelector(state => state.game)

  useEffect(() => {
    dispatch(resetGame())
    dispatch(resetBoard())

  }, [dispatch])

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
