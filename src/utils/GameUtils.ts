import { BoardTileType, BoardType, GameResultType } from '../models/Types'
import { O_MARK, X_MARK } from './Constants'

/**
 * @param grid Number
 * @returns A new board matrix grid x grid
 */
export const createBoard = (grid: number): BoardType => {
  return Array.from({ length: grid }, e => Array(grid).fill({ move: false, highlight: false }))
}

/**
 * @param array Array of board moves
 * @returns True if all elements have the same string
 */
export const isWinCombo = (array: BoardTileType[]): boolean => {
  return array.every(tile => tile.move === X_MARK) || array.every(tile => tile.move === O_MARK)
}

/**
 * @use Checks all possible combos and return the winning Mark and highlight winning tiles or in case all moves are played return 'draw' else false
 * @param board Game board with played moves
 * @returns In case of a winning combo it will return winners Mark and the highlighted board,
 *  if all rows are completed and no winner 'draw' else false ( game continues )
 */
export const calculateResult = (
  board: BoardType
): { result: GameResultType; updatedBoard: BoardType } => {
  let completedRows = 0
  const leftDiagonal: BoardTileType[] = []
  const rightDiagonal: BoardTileType[] = []

  for (let i = 0; i < board.length; i++) {
    const columnsToCheck: BoardTileType[] = []

    // Check if row is completed and increase completedRows's value
    if (board[i].every(tile => tile.move === X_MARK || tile.move === O_MARK)) {
      completedRows++
    }

    // Check rows
    if (isWinCombo(board[i])) {
      // Change tiles to highlight prop to true
      board[i] = board[i].map(tile => {
        return { ...tile, highlight: true }
      })

      // In case of a winning combo return the the first Mark of the array as the winner
      return { result: board[i][0].move, updatedBoard: board }
    }

    // Create a column based on the current index
    board.forEach(row => columnsToCheck.push(row[i]))

    // Check column
    if (isWinCombo(columnsToCheck)) {
      const updatedBoard: BoardType = []
      // Loop through the rows
      board.forEach(row => {
        // Map tiles and if the index matches current checking index highlight it
        const updatedRow = row.map((tile, index) => {
          return { ...tile, highlight: index === i }
        })

        updatedBoard.push(updatedRow)
      })
      return { result: columnsToCheck[0].move, updatedBoard }
    }

    // Create a left and right diagonal combos based
    leftDiagonal.push(board[i][i])
    rightDiagonal.push(board[i][board.length - i - 1])
  }

  // Check right and left diagonal combos
  if (isWinCombo(leftDiagonal)) {
    const updatedBoard = highlightBoardDiagonal(board)
    return { result: leftDiagonal[0].move, updatedBoard }
  }

  if (isWinCombo(rightDiagonal)) {
    const updatedBoard = highlightBoardDiagonal(board, true)
    return { result: rightDiagonal[0].move, updatedBoard }
  }

  // if completedRows are equal to board rows return draw
  return { result: completedRows === board.length ? 'draw' : false, updatedBoard: board }
}

/**
 *
 * @param board Board to highlight
 * @param isRight If the diagonal to highlight is from right to left
 * @returns A board with highlighted the left or right diagonal
 */
export const highlightBoardDiagonal = (board: BoardType, isRight?: boolean): BoardType => {
  const updatedBoard: BoardType = []
  // If the diagonal is right to left reverse the array
  const boardToHighlight = !!isRight ? board.reverse() : board

  boardToHighlight.forEach((row, rowIndex) => {
    // Highlight diagonal by incrementing the highlighted tile's index by one for each row
    const updatedRow = row.map((tile, index) => {
      return { ...tile, highlight: index === rowIndex }
    })
    updatedBoard.push(updatedRow)
  })

  // If the diagonal is right to left reverse the array to get back to the original form
  return !!isRight ? updatedBoard.reverse() : updatedBoard
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
