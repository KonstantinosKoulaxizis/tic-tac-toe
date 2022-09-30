import { useReduxDispatch, useReduxSelector } from '../../utils/ReduxHooks'
import { addMove } from '../../store/slices/boardReducer'

import Mark from '../shared/Mark'

const Board = () => {
  const dispatch = useReduxDispatch()
  const { board, result, disabled } = useReduxSelector(state => state.board)

  return (
    <div className='board-grid-container'>
      <div className='board-grid'>
        {/* Render rows */}
        {board.map((rows, i) => (
          <div className='board-row' key={i}>
            {/* Render row tiles */}
            {rows.map((tile, index) => (
              <button
                key={`${i}-${index}`}
                className={tile.highlight ? 'board-tile highlighted' : 'board-tile'}
                onClick={() => dispatch(addMove({ row: i, index }))}
                disabled={!!tile.move || !!result || disabled}
              >
                {/* If there is a move render Mark */}
                {tile.move && <Mark mark={tile.move} />}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Board
