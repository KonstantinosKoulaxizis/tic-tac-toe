import { resetBoard } from '../../store/slices/boardReducer'
import { useReduxDispatch, useReduxSelector } from '../../utils/ReduxHooks'
import Logo from '../shared/Logo'

const TopBar = () => {
  const dispatch = useReduxDispatch()
  const { round } = useReduxSelector(state => state.score)
  const { grid } = useReduxSelector(state => state.game)

  return (
    <div className='top-bar'>
      <Logo />
      <button className='secondary' onClick={() => dispatch(resetBoard({ round, grid }))}>
        Restart round
      </button>
    </div>
  )
}

export default TopBar
