import { useNavigate } from 'react-router-dom'

import { useReduxDispatch } from '../../utils/ReduxHooks'
import { setAiPlayer } from '../../store/slices/gameReducer'

const GameTypeButtons = () => {
  const navigate = useNavigate()
  const dispatch = useReduxDispatch()

  const handlePlayWithCPU = () => {
    dispatch(setAiPlayer(true))
    navigate('/game')
  }
  return (
    <div className='game-buttons'>
      <button className='cpu-button' onClick={handlePlayWithCPU}>
        New game vs CPU
      </button>
      <button className='player-button' onClick={() => navigate('/game')}>
        New game vs player
      </button>
    </div>
  )
}

export default GameTypeButtons
