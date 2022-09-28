import { useNavigate } from 'react-router-dom'

import { useReduxDispatch } from '../../utils/ReduxHooks'
import { setAiPlayer } from '../../store/slices/gameReducer'

const GameTypeButtons = () => {
  const navigate = useNavigate()
  const dispatch = useReduxDispatch()

  /**
   * @use Choose if the user will play vs the ai or another player and navigate to screen
   * @param aiPlayer If true ai mode is on
   */
  const handleStartGame = (aiPlayer: boolean) => {
    dispatch(setAiPlayer(aiPlayer))
    navigate('/game')
  }

  return (
    <div className='game-buttons'>
      <button className='ai-payer-button' onClick={() => handleStartGame(true)}>
        New game vs AI
      </button>
      <button className='player-button' onClick={() => handleStartGame(false)}>
        New game vs player
      </button>
    </div>
  )
}

export default GameTypeButtons
