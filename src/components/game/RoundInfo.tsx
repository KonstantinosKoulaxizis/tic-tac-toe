import { useReduxSelector } from '../../utils/ReduxHooks'

const RoundInfo = () => {
  const { playerNames, aiPlayer } = useReduxSelector(state => state.game)
  const { turn, disabled } = useReduxSelector(state => state.board)
  const { round } = useReduxSelector(state => state.score)

  /**
   * In case aiPlayer and disabled are true indicate show AI message
   */
  const aiCalculating = aiPlayer && disabled

  return (
    <div className='round-info'>
      <div className='players-round-container'>
        <h2 className='player-round-text'>Round {round}</h2>

        <h3 className='player-round-text'>
          {aiCalculating ? 'AI is calculating ...' : `${turn}'s turn: ${playerNames[turn]}`}
        </h3>
      </div>
    </div>
  )
}

export default RoundInfo
