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
  name: 'score',
  initialState,
  reducers: {
    /**
     * @use Calculate round's result and proceed to next round
     * @param action Game's result
     */
    setNextRound: (state, action: PayloadAction<GameResultType>) => {
      const winner = action.payload

      if (winner === 'draw') {
        state.draws++
      } else if (winner) {
        state.score[winner]++
      }

      state.round++
    },
    /**
     * @use Reset game's state
     */
    resetGame: state => {
      state.round = 1
      state.draws = 0
      state.score = {
        [X_MARK]: 0,
        [O_MARK]: 0
      }
    }
  }
})

export const { setNextRound, resetGame } = scoreSlice.actions

export default scoreSlice.reducer
