import TopBar from '../components/game/TopBar'
import RoundInfo from '../components/game/RoundInfo'
import Board from '../components/game/Board'

import '../styles/Game.scss'

const Game = () => {
  return (
    <div className='game'>
      <TopBar />
      <RoundInfo />
      <Board />
    </div>
  )
}

export default Game
