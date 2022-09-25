import { BoardType } from '../models/Types'

/**
 *
 * @param grid Number
 * @returns A new board matrix grid x grid
 */
export const createBoard = (grid: number): BoardType => {
  return Array.from({ length: grid }, e => Array(grid).fill(''))
}
