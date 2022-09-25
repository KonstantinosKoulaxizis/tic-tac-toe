import { MARKS } from '../../utils/Constants'
import Mark from './Mark'

const Logo = () => {
  return (
    <div className='logo'>
      {MARKS.map(mark => (
        <span key={mark} className='logo-letter'>
          <Mark markType={mark as 'X'} />
        </span>
      ))}
    </div>
  )
}

export default Logo
