import { Routes, Route, Outlet } from 'react-router-dom'

import GameSelection from './views/GameSelection'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<GameSelection />} />
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
