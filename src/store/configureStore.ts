import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './slices/gameReducer'
import scoreReducer from './slices/scoreReducer'

export const store = configureStore({
  reducer: {
    game: gameSlice,
    score: scoreReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
