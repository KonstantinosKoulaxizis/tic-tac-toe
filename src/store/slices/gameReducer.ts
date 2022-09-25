import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { BoardType, MarkType } from '../../models/Types'
import { createBoard } from '../../utils/GameUtils'

import { INITIAL_GRID_NUMBER } from '../../utils/Constants'

interface GameSliceInterface {
  playerNames: {
    X: string
    O: string
  }
  grid: number,
  board: BoardType
}

const initialState: GameSliceInterface = {
  playerNames: {
    X: 'One',
    O: 'Two'
  },
  grid: INITIAL_GRID_NUMBER,
  board: createBoard(INITIAL_GRID_NUMBER),

}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayerName: (state, action: PayloadAction<{ mark: MarkType; value: string }>) => {
      const { mark, value } = action.payload
      state.playerNames[mark] = value
    },
    setGrid: (state, action) => {
      const gridValue = action.payload
      state.board = createBoard(gridValue)
      state.grid = gridValue
    }
  }
})

export const { setPlayerName, setGrid } = gameSlice.actions

export default gameSlice.reducer
