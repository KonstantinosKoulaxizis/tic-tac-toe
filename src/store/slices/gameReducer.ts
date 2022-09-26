import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MarkType } from '../../models/Types'
import { GameSliceInterface } from '../../models/Interfaces'
import { calculateResult, createBoard } from '../../utils/GameUtils'

import { INITIAL_GRID_NUMBER, O_MARK, X_MARK } from '../../utils/Constants'

const initialState: GameSliceInterface = {
  playerNames: {
    [X_MARK]: 'One',
    [O_MARK]: 'Two'
  },
  aiPlayer: false,
  grid: INITIAL_GRID_NUMBER,
  board: createBoard(INITIAL_GRID_NUMBER),
  turn: X_MARK,
  result: false
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
    },
    addMove: (state, action) => {
      const { row, index } = action.payload

      state.board[row][index] = state.turn
      state.result = calculateResult(state.board)

      if (!state.result) {
        state.turn = state.turn === X_MARK ? O_MARK : X_MARK
      }
    },
    resetRound: state => {
      state.board = createBoard(state.grid)
      state.turn = X_MARK
      state.result = false
    }
  }
})

export const { setPlayerName, setGrid, setAiPlayer, addMove, resetRound } = gameSlice.actions

export default gameSlice.reducer
