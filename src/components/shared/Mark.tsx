import { FunctionComponent } from 'react'
import { MarkType } from '../../models/Types'

interface MarkInterface {
  mark: MarkType
}

const Mark: FunctionComponent<MarkInterface> = ({ mark }) => {
  const markClass = mark === 'X' ? 'x-letter' : 'o-letter'

  return <span className={markClass}>{mark}</span>
}

export default Mark
