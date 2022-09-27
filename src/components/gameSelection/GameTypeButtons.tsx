import { useNavigate } from 'react-router-dom'

import { useReduxDispatch } from '../../utils/ReduxHooks'
import { setAiPlayer } from '../../store/slices/gameReducer'

const GameTypeButtons = () => {
  const navigate = useNavigate()
  const dispatch = useReduxDispatch()

  const handleStartGame = (aiPlayer: boolean) => {
    dispatch(setAiPlayer(aiPlayer))
    navigate('/game')
  }
  
  return (
    <div className='game-buttons'>
      <button className='cpu-button' onClick={() => handleStartGame(true)}>
        New game vs CPU
      </button>
      <button className='player-button' onClick={() => handleStartGame(false)}>
        New game vs player
      </button>
    </div>
  )
}

export default GameTypeButtons
