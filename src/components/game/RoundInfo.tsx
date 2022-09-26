import { useReduxSelector } from "../../utils/ReduxHooks"

const RoundInfo = () => {
  const { turn, playerNames } = useReduxSelector(state => state.game)

  return (
    <div className='round-info'>
      <div className='players-turn-container'>
        <h3 className='player-turn-text'>{turn}'s turn: {playerNames[turn]}</h3>
      </div>
    </div>
  )
}

export default RoundInfo
