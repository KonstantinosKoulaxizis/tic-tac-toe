import { MARKS } from '../../utils/Constants'
import Mark from './Mark'

const Logo = () => {
  return (
    <div className='logo'>
      <span className='on-air-logo'>ON AIR</span>
      {MARKS.map(mark => (
        <span key={mark} className='logo-letter'>
          <Mark mark={mark} />
        </span>
      ))}
    </div>
  )
}

export default Logo
