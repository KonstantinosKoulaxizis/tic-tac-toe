import { O_MARK, X_MARK } from '../utils/Constants'
import { BoardType, MarkType, GameResultType } from './Types'

export interface GameSliceInterface {
  playerNames: {
    [X_MARK]: string
    [O_MARK]: string
  }
  aiPlayer: boolean
  grid: number
  board: BoardType
  turn: MarkType
  result: GameResultType
}

export interface ScoreSliceInterface {
  score: {
    [X_MARK]: number
    [O_MARK]: number
  }
  round: number
  draws: number
}
