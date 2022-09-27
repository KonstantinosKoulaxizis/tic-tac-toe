import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './slices/gameReducer'
import scoreReducer from './slices/scoreReducer'
import boardReducer from './slices/boardReducer'

export const store = configureStore({
  reducer: {
    game: gameSlice,
    board: boardReducer,
    score: scoreReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
