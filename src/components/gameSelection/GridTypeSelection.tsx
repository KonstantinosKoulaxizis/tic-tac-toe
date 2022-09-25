import { useReduxDispatch, useReduxSelector } from '../../utils/ReduxHooks'
import { setGrid } from '../../store/slices/gameReducer'

const GridTypeSelection = () => {
  const dispatch = useReduxDispatch()
  const { grid } = useReduxSelector(state => state.game)

  const GRID_VALUES = [3, 4, 5]

  return (
    <div className='grid-selection'>
      <h3>Select grid type</h3>
      <div className='grid-selection-container'>
        {GRID_VALUES.map(value => (
          <div key={value}>
            <label>
              {value} x {value}
            </label>
            <input
              type='radio'
              value={value}
              checked={value === grid}
              onChange={() => dispatch(setGrid(value))}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridTypeSelection
