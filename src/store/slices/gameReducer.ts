import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MarkType } from '../../models/Types'
import { GameSliceInterface } from '../../models/Interfaces'

import { INITIAL_GRID_NUMBER, O_MARK, X_MARK } from '../../utils/Constants'

const initialState: GameSliceInterface = {
  playerNames: {
    [X_MARK]: 'One',
    [O_MARK]: 'Two'
  },
  aiPlayer: false,
  grid: INITIAL_GRID_NUMBER
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    /**
     * @use Update player name
     * @param mark X_MARK or O_MARK are used as keys of playerNames object
     * @param value new name for player X or O
     */
    setPlayerName: (state, action: PayloadAction<{ mark: MarkType; value: string }>) => {
      const { mark, value } = action.payload
      state.playerNames[mark] = value
    },
    /**
     * @use Set grid and update board
     * @param action Number used to indicate board's grid
     */
    setGrid: (state, action: PayloadAction<number>) => {
      const gridValue = action.payload
      state.grid = gridValue
    },
    /**
     * @use Change ai mode
     * @param action If true player O will be ai
     */
    setAiPlayer: (state, action: PayloadAction<boolean>) => {
      state.aiPlayer = action.payload
    }
  }
})

export const { setPlayerName, setGrid, setAiPlayer } = gameSlice.actions

export default gameSlice.reducer
