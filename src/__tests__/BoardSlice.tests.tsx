import reducer, { addMove, resetBoard } from '../store/slices/boardReducer'
import { BoardSliceInterface } from '../models/Interfaces'
import { INITIAL_GRID_NUMBER, O_MARK, X_MARK } from '../utils/Constants'
import { createBoard } from '../utils/GameUtils'

const initialState: BoardSliceInterface = {
  board: createBoard(INITIAL_GRID_NUMBER),
  turn: X_MARK,
  result: false,
  disabled: false
}

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState)
})

test('should add a move and change turn', () => {
  const updatedBoard = [
    [
      { move: X_MARK, highlight: false },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: false, highlight: false },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: false, highlight: false },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ]
  ]

  expect(reducer(undefined, addMove({ row: 0, index: 0 }))).toEqual({
    ...initialState,
    board: updatedBoard,
    turn: O_MARK
  })
})

test('should continue game if no winning combination is detected', () => {
  const previousState = { ...initialState }
  previousState.board = [
    [
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: false, highlight: false },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: false, highlight: false },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ]
  ]

  const updatedBoard = [
    [
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false }
    ],
    [
      { move: false, highlight: false },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: false, highlight: false },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ]
  ]

  expect(reducer(previousState, addMove({ row: 0, index: 2 }))).toEqual({
    ...previousState,
    board: updatedBoard,
    turn: O_MARK,
    result: false
  })
})

test('should calculate row winning combination', () => {
  const previousState = { ...initialState }
  previousState.board = [
    [
      { move: X_MARK, highlight: false },
      { move: X_MARK, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: O_MARK, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: false, highlight: false },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ]
  ]

  const updatedBoard = [
    [
      { move: X_MARK, highlight: true },
      { move: X_MARK, highlight: true },
      { move: X_MARK, highlight: true }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: O_MARK, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: false, highlight: false },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ]
  ]

  expect(reducer(previousState, addMove({ row: 0, index: 2 }))).toEqual({
    ...previousState,
    board: updatedBoard,
    turn: X_MARK,
    result: X_MARK
  })
})

test('should calculate column winning combination', () => {
  const previousState = { ...initialState }
  previousState.board = [
    [
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: false, highlight: false },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ]
  ]

  const updatedBoard = [
    [
      { move: X_MARK, highlight: true },
      { move: O_MARK, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: X_MARK, highlight: true },
      { move: O_MARK, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: X_MARK, highlight: true },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ]
  ]

  expect(reducer(previousState, addMove({ row: 2, index: 0 }))).toEqual({
    ...previousState,
    board: updatedBoard,
    turn: X_MARK,
    result: X_MARK
  })
})

test('should calculate right diagonal winning combination', () => {
  const previousState = { ...initialState }
  previousState.board = [
    [
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: false, highlight: false },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ]
  ]

  const updatedBoard = [
    [
      { move: X_MARK, highlight: true },
      { move: O_MARK, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: true },
      { move: false, highlight: false }
    ],
    [
      { move: false, highlight: false },
      { move: false, highlight: false },
      { move: X_MARK, highlight: true }
    ]
  ]

  expect(reducer(previousState, addMove({ row: 2, index: 2 }))).toEqual({
    ...previousState,
    board: updatedBoard,
    turn: X_MARK,
    result: X_MARK
  })
})

test('should calculate left diagonal winning combination', () => {
  const previousState = { ...initialState }
  previousState.board = [
    [
      { move: O_MARK, highlight: false },
      { move: false, highlight: false },
      { move: X_MARK, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false },
      { move: false, highlight: false }
    ],
    [
      { move: false, highlight: false },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ]
  ]

  const updatedBoard = [
    [
      { move: O_MARK, highlight: false },
      { move: false, highlight: false },
      { move: X_MARK, highlight: true }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: true },
      { move: false, highlight: false }
    ],
    [
      { move: X_MARK, highlight: true },
      { move: false, highlight: false },
      { move: false, highlight: false }
    ]
  ]

  expect(reducer(previousState, addMove({ row: 2, index: 0 }))).toEqual({
    ...previousState,
    board: updatedBoard,
    turn: X_MARK,
    result: X_MARK
  })
})

test('should calculate draw', () => {
  const previousState = { ...initialState }
  previousState.board = [
    [
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false },
      { move: X_MARK, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: false, highlight: false },
      { move: O_MARK, highlight: false }
    ]
  ]

  const updatedBoard = [
    [
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false },
      { move: X_MARK, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false }
    ]
  ]

  expect(reducer(previousState, addMove({ row: 2, index: 1 }))).toEqual({
    ...previousState,
    board: updatedBoard,
    turn: X_MARK,
    result: 'draw'
  })
})

test('should reset the board in 3x3 grid', () => {
  const previousState = { ...initialState }
  previousState.board = [
    [
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false },
      { move: X_MARK, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false }
    ]
  ]

  expect(reducer(previousState, resetBoard({ round: 1, grid: 3 }))).toEqual(initialState)
})

test('should reset the board in 4x4 grid', () => {
  const previousState = { ...initialState }
  previousState.board = [
    [
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false },
      { move: X_MARK, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false }
    ]
  ]

  const newState: BoardSliceInterface = {
    ...previousState,
    board: createBoard(4)
  }

  expect(reducer(previousState, resetBoard({ round: 1, grid: 4 }))).toEqual(newState)
})

test('should reset with O_MARK at round 2', () => {
  const previousState = { ...initialState }
  previousState.board = [
    [
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false },
      { move: X_MARK, highlight: false }
    ],
    [
      { move: O_MARK, highlight: false },
      { move: X_MARK, highlight: false },
      { move: O_MARK, highlight: false }
    ]
  ]

  const newState: BoardSliceInterface = {
    board: createBoard(3),
    turn: O_MARK,
    result: false,
    disabled: false
  }

  expect(reducer(previousState, resetBoard({ round: 2, grid: 3 }))).toEqual(newState)
})
