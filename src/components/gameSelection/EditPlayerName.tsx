import { ChangeEvent } from 'react'

import { useReduxDispatch, useReduxSelector } from '../../utils/ReduxHooks'
import { setPlayerName } from '../../store/slices/gameReducer'

import { MarkType } from '../../models/Types'
import { MARKS } from '../../utils/Constants'

const EditPlayerName = () => {
  const dispatch = useReduxDispatch()
  const { playerNames } = useReduxSelector(state => state.game)

  /**
   * Update players name in redux
   */
  const handleUpdateName = (event: ChangeEvent<HTMLInputElement>, mark: MarkType) => {
    const value = event.target.value || ''
    dispatch(setPlayerName({ mark, value }))
  }

  return (
    <div className='edit-players-names'>
      {/* Loop through marks array and use it as key to get the name value*/}
      {MARKS.map(mark => (
        <div key={mark}>
          <label htmlFor={mark} className='label-tag'>
            <span>{mark} player's name</span>
          </label>

          <input id={mark} value={playerNames[mark]} onChange={e => handleUpdateName(e, mark)} />
        </div>
      ))}
    </div>
  )
}

export default EditPlayerName
