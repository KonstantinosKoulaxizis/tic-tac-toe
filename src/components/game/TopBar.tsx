import { resetRound } from '../../store/slices/gameReducer'
import { useReduxDispatch } from '../../utils/ReduxHooks'
import Logo from '../shared/Logo'

const TopBar = () => {
  const dispatch = useReduxDispatch()

  return (
    <div className='top-bar'>
      <Logo />
      <button className='secondary' onClick={() => dispatch(resetRound())}>
        Restart round
      </button>
    </div>
  )
}

export default TopBar
