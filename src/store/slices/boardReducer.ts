import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { BoardSliceInterface } from '../../models/Interfaces'
import { calculateResult, createBoard } from '../../utils/GameUtils'

import { INITIAL_GRID_NUMBER, O_MARK, X_MARK } from '../../utils/Constants'
import { setGrid } from './gameReducer'

const initialState: BoardSliceInterface = {
  board: createBoard(INITIAL_GRID_NUMBER),
  turn: X_MARK,
  result: false,
  disabled: false
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    /**
     * @use Add a move to the board and calculate if there is a winner or a draw
     * @param row Row of the move
     * @param index Tile's row index of the move
     */
    addMove: (state, action: PayloadAction<{ row: number; index: number }>) => {
      const { row, index } = action.payload

      state.board[row][index].move = state.turn

      const { result, updatedBoard } = calculateResult(state.board)

      state.result = result
      state.board = updatedBoard

      if (!state.result) {
        state.turn = state.turn === X_MARK ? O_MARK : X_MARK
      }
    },
    /**
     * @use Reset board's state and choose player to play first based on round
     * @param action Round's number
     */
    resetBoard: (state, action: PayloadAction<{ round: number; grid: number }>) => {
      const { round, grid } = action?.payload
      state.board = createBoard(grid)
      state.turn = round % 2 ? X_MARK : O_MARK
      state.result = false
    },
    /**
     * @use Disable the board and not allow new moves from button clicks
     * @param action Board's disable status
     */
    setDisabled: (state, action: PayloadAction<boolean>) => {
      state.disabled = action.payload
    }
  },
  /**
   * @use Create new board based on grid value
   * @param action Number used in grid
   */
  extraReducers: builder => {
    builder.addCase(setGrid, (state, action: PayloadAction<number>) => {
      state.board = createBoard(action.payload)
    })
  }
})

export const { addMove, resetBoard, setDisabled } = boardSlice.actions

export default boardSlice.reducer
