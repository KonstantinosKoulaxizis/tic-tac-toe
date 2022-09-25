import { ChangeEvent } from 'react'
import { MarkType } from '../../models/Types'
import { useReduxDispatch, useReduxSelector } from '../../utils/ReduxHooks'
import { setPlayerName } from '../../store/slices/gameReducer'

const EditPlayersNames = () => {
  const dispatch = useReduxDispatch()
  const { playerNames } = useReduxSelector(state => state.game)

  const handleUpdate = (event: ChangeEvent<HTMLInputElement>, mark: MarkType) => {
    const value = event.target.value || ''
    dispatch(setPlayerName({ mark, value }))
  }

  return (
    <div className='edit-players-names'>
      {Object.entries(playerNames).map(name => (
        <label key={name[0]}>
          <span className='label-tag'>
            <span>
              Player's <span className='capitalize'>{name[0]}</span> name
            </span>
          </span>

          <input value={name[1]} onChange={e => handleUpdate(e, name[0] as MarkType)} />
        </label>
      ))}
    </div>
  )
}

export default EditPlayersNames
