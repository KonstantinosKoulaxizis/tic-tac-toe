import { O_MARK, X_MARK } from '../../utils/Constants'
import { useReduxSelector } from '../../utils/ReduxHooks'

const ScoreInfo = () => {
  const { score, draws } = useReduxSelector(state => state.score)
  const { playerNames, aiPlayer } = useReduxSelector(state => state.game)

  /**
   * Array of X, O and draw scores
   */
  const SCORE_TILES = [
    {
      label: `${playerNames[X_MARK]} - ${X_MARK}`,
      score: score[X_MARK],
      class: 'info-card x-score'
    },
    {
      label: 'Draw',
      score: draws,
      class: 'info-card'
    },
    /**
     *  In case aiPlayer is true use ai instead of playerName
     */
    {
      label: `${aiPlayer ? 'AI' : playerNames[O_MARK]} - ${O_MARK}`,
      score: score[O_MARK],
      class: 'info-card o-score'
    }
  ]

  return (
    <div className='score-info-container'>
      <div className='score-info'>
        {SCORE_TILES.map((tile, index) => (
          <div className={tile.class} key={index}>
            <h3>{tile.label}</h3>
            <h3>{tile.score}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScoreInfo
