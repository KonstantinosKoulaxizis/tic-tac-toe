import { FunctionComponent } from 'react'

interface MarkInterface {
  markType: 'X' | 'O'
}

const Mark: FunctionComponent<MarkInterface> = ({ markType }) => {
  const markClass = markType === 'X' ? 'x-letter' : 'o-letter'

  return <span className={markClass}>{markType}</span>
}

export default Mark
