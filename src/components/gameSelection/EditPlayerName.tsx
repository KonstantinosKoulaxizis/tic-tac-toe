import { ChangeEvent } from 'react'

import { useReduxDispatch, useReduxSelector } from '../../utils/ReduxHooks'
import { setPlayerName } from '../../store/slices/gameReducer'

import { MarkType } from '../../models/Types'

const EditPlayerName = () => {
  const dispatch = useReduxDispatch()
  const { playerNames } = useReduxSelector(state => state.game)

  const handleUpdate = (event: ChangeEvent<HTMLInputElement>, mark: MarkType) => {
    const value = event.target.value || ''
    dispatch(setPlayerName({ mark, value }))
  }

  return (
    <div className='edit-players-names'>
      <h2 className='reminder'>Remember X goes first</h2>
      {Object.entries(playerNames).map(name => (
        <label key={name[0]}>
          <span className='label-tag'>
            <span>{name[0]} player's name</span>
          </span>

          <input value={name[1]} onChange={e => handleUpdate(e, name[0] as MarkType)} />
        </label>
      ))}
    </div>
  )
}

export default EditPlayerName
