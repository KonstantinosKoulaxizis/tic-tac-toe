import { useReduxDispatch, useReduxSelector } from '../../utils/ReduxHooks'
import { resetRound } from '../../store/slices/gameReducer'
import { resetGame, setNextRound } from '../../store/slices/scoreReducer'
import { useNavigate } from 'react-router-dom'

const RoundResult = () => {
  const dispatch = useReduxDispatch()
  const navigate = useNavigate()
  const { turn, playerNames, result } = useReduxSelector(state => state.game)

  const handleNextRound = () => {
    dispatch(resetRound())
    dispatch(setNextRound(result))
  }

  const exitToGameSelection = () => {
    navigate('/')
    dispatch(resetGame())
    dispatch(resetRound())
  }

  return (
    <div className='round-result'>
      {result === 'draw' ? (
        <h2 className='player-round-text'>The game end with draw</h2>
      ) : (
        <h2>Player {playerNames[turn]} is the winner!!</h2>
      )}

      <div className='round-result-buttons-container'>
        <div>
          <button onClick={exitToGameSelection}>Exit to game selection</button>
          <span>* All progress will be lost</span>
        </div>
        <button onClick={handleNextRound}>Next round</button>
      </div>
    </div>
  )
}

export default RoundResult
