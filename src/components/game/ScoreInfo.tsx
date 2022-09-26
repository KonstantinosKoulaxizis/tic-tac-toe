import { O_MARK, X_MARK } from '../../utils/Constants'
import { useReduxSelector } from '../../utils/ReduxHooks'

const ScoreInfo = () => {
  const { score, draws } = useReduxSelector(state => state.score)
  const { playerNames } = useReduxSelector(state => state.game)

  return (
    <div className='score-info-container'>
      <div className='score-info'>
        <div className='info-card x-score'>
          <h3>
            {playerNames[X_MARK]} - {X_MARK}
          </h3>
          <h3>{score[X_MARK]}</h3>
        </div>

        <div className='info-card'>
          <h3>Draw</h3>
          <h3>{draws}</h3>
        </div>

        <div className='info-card o-score'>
          <h3>
            {playerNames[O_MARK]} - {O_MARK}
          </h3>
          <h3>{score[O_MARK]}</h3>
        </div>
      </div>
    </div>
  )
}

export default ScoreInfo
