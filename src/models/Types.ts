import { X_MARK, O_MARK } from '../utils/Constants'

export type MarkType = typeof X_MARK | typeof O_MARK

export type BoardMovesType = MarkType | false

export type BoardType = BoardMovesType[][]

export type GameResultType = MarkType | 'draw' | false