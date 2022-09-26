import TopBar from '../components/game/TopBar'
import Board from '../components/game/Board'

import '../styles/Game.scss'

const Game = () => {
  return (
    <div className='game'>
      <TopBar />
      <Board />
    </div>
  )
}

export default Game
