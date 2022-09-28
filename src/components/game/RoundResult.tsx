import { useReduxDispatch, useReduxSelector } from '../../utils/ReduxHooks'
import { resetBoard } from '../../store/slices/boardReducer'
import { setNextRound } from '../../store/slices/scoreReducer'
import { useNavigate } from 'react-router-dom'

const RoundResult = () => {
  const dispatch = useReduxDispatch()
  const navigate = useNavigate()
  const { playerNames, grid } = useReduxSelector(state => state.game)
  const { turn, result } = useReduxSelector(state => state.board)
  const { round } = useReduxSelector(state => state.score)

  /**
   * Change round and reset the board
   */
  const handleNextRound = () => {
    dispatch(setNextRound(result))
    // Add +1 to current round so it can calculate the next one
    dispatch(resetBoard({ round: round + 1, grid }))
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
          <button onClick={() => navigate('/')}>Exit to game selection</button>
          <span>* All progress will be lost</span>
        </div>
        <button onClick={handleNextRound}>Next round</button>
      </div>
    </div>
  )
}

export default RoundResult
