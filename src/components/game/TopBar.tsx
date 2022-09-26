import Logo from '../shared/Logo'

const TopBar = () => {
  return (
    <div className='top-bar'>
      <Logo />
      <button className='secondary'>Restart round</button>
    </div>
  )
}

export default TopBar
