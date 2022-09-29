import { BoardMovesType, BoardType, GameResultType } from '../models/Types'
import { O_MARK, X_MARK } from './Constants'

/**
 * @param grid Number
 * @returns A new board matrix grid x grid
 */
export const createBoard = (grid: number): BoardType => {
  return Array.from({ length: grid }, e => Array(grid).fill(false))
}

/**
 * @param array Array of board moves
 * @returns True if all elements have the same string
 */
export const isWinCombo = (array: BoardMovesType[]): boolean => {
  return array.every(mark => mark === X_MARK) || array.every(mark => mark === O_MARK)
}

/**
 * @use Checks all possible combos and return the winning Mark or in case all moves are played return 'draw' else false
 * @param board Game board with played moves
 * @returns In case of a winning combo it will return winners Mark, if all rows are completed and no winner 'draw' else false ( game continues )
 */
export const calculateResult = (board: BoardType): GameResultType => {
  let completedRows = 0
  const leftDiagonal: BoardMovesType[] = []
  const rightDiagonal: BoardMovesType[] = []

  for (let i = 0; i < board.length; i++) {
    const columnsToCheck: BoardMovesType[] = []

    // Check if row is completed and increase completedRows's value
    if (board[i].every(mark => mark === X_MARK || mark === O_MARK)) {
      completedRows++
    }

    // Check rows
    if (isWinCombo(board[i])) {
      // In case of a winning combo return the the first Mark of the array as the winner
      return board[i][0]
    }

    // Create a column based on the current index
    board.forEach(row => columnsToCheck.push(row[i]))

    // Check column
    if (isWinCombo(columnsToCheck)) {
      return columnsToCheck[0]
    }

    // Create a left and right diagonal combos based
    leftDiagonal.push(board[i][i])
    rightDiagonal.push(board[i][board.length - i - 1])
  }

  // Check right and left diagonal combos
  if (isWinCombo(leftDiagonal)) {
    return leftDiagonal[0]
  }

  if (isWinCombo(rightDiagonal)) {
    return rightDiagonal[0]
  }

  // if completedRows are equal to board rows return draw
  return completedRows === board.length ? 'draw' : false
}

/**
 * @use Finds the first available move
 * @param board Game board with played moves
 * @returns In case of an available move it will return row's index and move's index
 */
export const calculateAiMove = (board: BoardType): { row: number; index: number } | undefined => {
  for (let i = 0; i < board.length; i++) {
    // Loop through each row and find the available's move index
    const availableMoveIndex = board[i].findIndex(move => !move)

    // In case of an available move end loop and return row's and move's index
    if (availableMoveIndex > -1) {
      return {
        row: i,
        index: availableMoveIndex
      }
    }
  }

  return
}
