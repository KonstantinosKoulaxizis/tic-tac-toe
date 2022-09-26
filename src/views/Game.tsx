import { useReduxSelector } from '../utils/ReduxHooks'

import TopBar from '../components/game/TopBar'
import RoundInfo from '../components/game/RoundInfo'
import RoundResult from '../components/game/RoundResult'
import Board from '../components/game/Board'
import ScoreInfo from '../components/game/ScoreInfo'

import '../styles/Game.scss'

const Game = () => {
  const { result } = useReduxSelector(state => state.game)

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
