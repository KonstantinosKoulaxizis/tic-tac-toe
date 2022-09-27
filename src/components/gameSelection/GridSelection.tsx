import { useReduxDispatch, useReduxSelector } from '../../utils/ReduxHooks'
import { setGrid } from '../../store/slices/gameReducer'
import { GRID_VALUES } from '../../utils/Constants'

const GridSelection = () => {
  const dispatch = useReduxDispatch()
  const { grid } = useReduxSelector(state => state.game)

  return (
    <div className='grid-selection'>
      <h3>Select grid type</h3>
      <div className='grid-selection-container'>
        {GRID_VALUES.map(value => (
          <div key={value}>
            <label htmlFor={`${value}`}>
              {value} x {value}
            </label>
            <input
              id={`${value}`}
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

export default GridSelection
