import { ChangeEvent } from 'react'

import { useReduxDispatch, useReduxSelector } from '../../utils/ReduxHooks'
import { setPlayerName } from '../../store/slices/gameReducer'

import { MarkType } from '../../models/Types'
import { MARKS } from '../../utils/Constants'

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
      {/* Loop through marks array and use it as key to get the name value*/}
      {MARKS.map(mark => (
        <label key={mark}>
          <span className='label-tag'>
            <span>{mark} player's name</span>
          </span>

          <input value={playerNames[mark]} onChange={e => handleUpdate(e, mark)} />
        </label>
      ))}
    </div>
  )
}

export default EditPlayerName
