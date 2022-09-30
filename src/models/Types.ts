import { X_MARK, O_MARK } from '../utils/Constants'

export type MarkType = typeof X_MARK | typeof O_MARK

export type BoardTileType = {
  move: MarkType | false
  highlight: boolean
}

export type BoardType = BoardTileType[][]

export type GameResultType = MarkType | 'draw' | false
