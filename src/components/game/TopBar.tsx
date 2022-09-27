import { resetBoard } from '../../store/slices/gameReducer'
import { useReduxDispatch } from '../../utils/ReduxHooks'
import Logo from '../shared/Logo'

const TopBar = () => {
  const dispatch = useReduxDispatch()

  return (
    <div className='top-bar'>
      <Logo />
      <button className='secondary' onClick={() => dispatch(resetBoard())}>
        Restart round
      </button>
    </div>
  )
}

export default TopBar
