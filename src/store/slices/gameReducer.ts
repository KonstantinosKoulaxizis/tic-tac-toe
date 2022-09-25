import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MarkType } from '../../models/Types'

interface GameSliceInterface {
  playerNames: {
    X: string
    O: string
  }
}

const initialState: GameSliceInterface = {
  playerNames: {
    X: 'One',
    O: 'Two'
  }
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayerName: (state, action: PayloadAction<{ mark: MarkType; value: string }>) => {
      const { mark, value } = action.payload
      state.playerNames[mark] = value
    }
  }
})

export const { setPlayerName } = gameSlice.actions

export default gameSlice.reducer
