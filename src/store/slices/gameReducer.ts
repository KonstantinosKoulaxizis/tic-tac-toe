import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  board: []
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {}
})

export const {} = gameSlice.actions

export default gameSlice.reducer
