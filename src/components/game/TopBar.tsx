import { resetBoard } from '../../store/slices/gameReducer'
import { useReduxDispatch, useReduxSelector } from '../../utils/ReduxHooks'
import Logo from '../shared/Logo'

const TopBar = () => {
  const dispatch = useReduxDispatch()
  const { round } = useReduxSelector(state => state.score)

  return (
    <div className='top-bar'>
      <Logo />
      <button className='secondary' onClick={() => dispatch(resetBoard(round))}>
        Restart round
      </button>
    </div>
  )
}

export default TopBar
