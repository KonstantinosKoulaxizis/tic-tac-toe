import { useReduxSelector } from '../../utils/ReduxHooks'

const Board = () => {
  const { board } = useReduxSelector(state => state.game)

  return (
    <div className='board-grid'>
      {board.map((rows, i) => (
        <div className='board-row' key={i}>
          {rows.map((move, index) => (
            <span
              key={`${i}-${index}`}
              className='board-tile'
              onClick={() => console.log({ row: i, index })}
            >
              {move && <>X</>}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
