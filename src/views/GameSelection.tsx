import Logo from '../components/shared/Logo'
import EditPlayerName from '../components/gameSelection/EditPlayerName'
import GridSelection from '../components/gameSelection/GridSelection'
import GameTypeButtons from '../components/gameSelection/GameTypeButtons'

function GameSelection() {
  return (
    <div className='game-selection'>
      <Logo />
      <EditPlayerName />
      <GridSelection/>
      <GameTypeButtons />
    </div>
  )
}

export default GameSelection
