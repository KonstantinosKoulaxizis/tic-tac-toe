import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ScoreSliceInterface } from '../../models/Interfaces'
import { GameResultType } from '../../models/Types'
import { O_MARK, X_MARK } from '../../utils/Constants'

const initialState: ScoreSliceInterface = {
  round: 1,
  draws: 0,
  score: {
    [X_MARK]: 0,
    [O_MARK]: 0
  }
}

export const scoreSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<{ winner: GameResultType }>) => {
      const { winner } = action.payload

      if (winner === 'draw') {
        state.draws++
      } else if (winner) {
        state.score[winner]++
      }
    },
    setNextRound: state => {
      state.round++
    }
  }
})

export const { setResult, setNextRound } = scoreSlice.actions

export default scoreSlice.reducer
