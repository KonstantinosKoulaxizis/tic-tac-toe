import { useReduxSelector } from '../../utils/ReduxHooks'

const RoundInfo = () => {
  const { turn, playerNames } = useReduxSelector(state => state.game)
  const { round } = useReduxSelector(state => state.score)

  return (
    <div className='round-info'>
      <div className='players-round-container'>
        <h2 className='player-round-text'>Round {round}</h2>
        <h3 className='player-round-text'>
          {turn}'s turn: {playerNames[turn]}
        </h3>
      </div>
    </div>
  )
}

export default RoundInfo
