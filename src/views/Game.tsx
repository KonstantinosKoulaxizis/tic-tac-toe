import { useReduxSelector } from '../utils/ReduxHooks'
import TopBar from '../components/game/TopBar'
import RoundInfo from '../components/game/RoundInfo'
import RoundResult from '../components/game/RoundResult'
import Board from '../components/game/Board'

import '../styles/Game.scss'

const Game = () => {
  const { result } = useReduxSelector(state => state.game)

  return (
    <div className='game'>
      <TopBar />
      {result ? <RoundResult /> : <RoundInfo />}
      <Board />
    </div>
  )
}

export default Game
