import { useReduxDispatch, useReduxSelector } from '../../utils/ReduxHooks'
import { addMove } from '../../store/slices/gameReducer'

import Mark from '../shared/Mark'

const Board = () => {
  const dispatch = useReduxDispatch()
  const { board, result } = useReduxSelector(state => state.game)

  return (
    <div className='board-grid-container'>
      <div className='board-grid'>
        {board.map((rows, i) => (
          <div className='board-row' key={i}>
            {rows.map((move, index) => (
              <button
                key={`${i}-${index}`}
                className='board-tile'
                onClick={() => dispatch(addMove({ row: i, index }))}
                disabled={!!result}
              >
                {move && <Mark mark={move} />}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Board
