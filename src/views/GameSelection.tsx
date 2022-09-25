import EditPlayersNames from '../components/gameSelection/EditPlayersNames'
import Logo from '../components/shared/Logo'

import '../styles/GameSelection.scss'

function GameSelection() {
  return (
    <div className='game-selection'>
      <Logo />
      <EditPlayersNames />
    </div>
  )
}

export default GameSelection
