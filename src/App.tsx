import { Routes, Route, Outlet } from 'react-router-dom'

import GameSelection from './views/GameSelection'
import Game from './views/Game'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<GameSelection />} />
        <Route path='/game' element={<Game />} />
      </Route>
    </Routes>
  )
}

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
