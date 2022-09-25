import Logo from '../components/shared/Logo'
import EditPlayersNames from '../components/gameSelection/EditPlayersNames'
import GridTypeSelection from '../components/gameSelection/GridTypeSelection'

import '../styles/GameSelection.scss'

function GameSelection() {
  return (
    <div className='game-selection'>
      <Logo />
      <EditPlayersNames />
      <GridTypeSelection/>
    </div>
  )
}

export default GameSelection
