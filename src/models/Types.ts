import {X_MARK, O_MARK} from '../utils/Constants'

export type MarkType = typeof X_MARK | typeof O_MARK

export type BoardMovesType = MarkType | ''

export type BoardType = BoardMovesType[][]
