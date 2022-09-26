import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { BoardType, MarkType } from '../../models/Types'
import { createBoard } from '../../utils/GameUtils'

import { INITIAL_GRID_NUMBER, O_MARK, X_MARK } from '../../utils/Constants'

interface GameSliceInterface {
  playerNames: {
    [X_MARK]: string
    [O_MARK]: string
  }
  aiPlayer: boolean
  grid: number
  board: BoardType
}

const initialState: GameSliceInterface = {
  playerNames: {
    [X_MARK]: 'One',
    [O_MARK]: 'Two'
  },
  aiPlayer: false,
  grid: INITIAL_GRID_NUMBER,
  board: createBoard(INITIAL_GRID_NUMBER)
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayerName: (state, action: PayloadAction<{ mark: MarkType; value: string }>) => {
      const { mark, value } = action.payload
      state.playerNames[mark] = value
    },
    setGrid: (state, action: PayloadAction<number>) => {
      const gridValue = action.payload
      state.board = createBoard(gridValue)
      state.grid = gridValue
    },
    setAiPlayer: (state, action: PayloadAction<boolean>) => {
      state.aiPlayer = action.payload
    }
  }
})

export const { setPlayerName, setGrid, setAiPlayer } = gameSlice.actions

export default gameSlice.reducer
