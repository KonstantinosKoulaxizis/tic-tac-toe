import { BoardMovesType, BoardType, GameResultType } from '../models/Types'
import { O_MARK, X_MARK } from './Constants'

/**
 *
 * @param grid Number
 * @returns A new board matrix grid x grid
 */
export const createBoard = (grid: number): BoardType => {
  return Array.from({ length: grid }, e => Array(grid).fill(false))
}

/**
 *
 * @param array Array of board moves
 * @returns True if all elements have the same string
 */
export const isWinCombo = (array: BoardMovesType[]): boolean => {
  if (array.every(mark => mark === X_MARK) || array.every(mark => mark === O_MARK)) {
    return true
  }
  return false
}

/**
 *
 * @param board Game board with played moves
 * @returns Checks all possible combos and return the winning Mark or false
 */
export const calculateResult = (board: BoardType): GameResultType => {
  let completedRows = 0
  const leftDiagonal: BoardMovesType[] = []
  const rightDiagonal: BoardMovesType[] = []

  for (let i = 0; i < board.length; i++) {
    const columnsToCheck: BoardMovesType[] = []

    // Check if row is completed
    if (board[i].every(mark => mark === X_MARK || mark === O_MARK)) {
      completedRows++
    }

    // Check rows
    if (isWinCombo(board[i])) {
      return board[i][0] || false
    }

    //   Check columns
    board.forEach(row => columnsToCheck.push(row[i]))

    if (isWinCombo(columnsToCheck)) {
      return columnsToCheck[0] || false
    }

    leftDiagonal.push(board[i][i])
    rightDiagonal.push(board[i][board.length - i - 1])
  }

  if (isWinCombo(leftDiagonal)) {
    return leftDiagonal[0] || false
  }

  if (isWinCombo(rightDiagonal)) {
    return rightDiagonal[0] || false
  }

  // if all moves are played and no winner return draw
  return completedRows === board.length ? 'draw' : false
}
