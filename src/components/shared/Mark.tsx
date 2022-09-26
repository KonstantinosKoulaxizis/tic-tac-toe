import { FunctionComponent } from 'react'
import { MarkType } from '../../models/Types'
import { X_MARK } from '../../utils/Constants'

interface MarkInterface {
  mark: MarkType
}

const Mark: FunctionComponent<MarkInterface> = ({ mark }) => {
  const markClass = mark === X_MARK ? 'x-letter' : 'o-letter'

  return <span className={markClass}>{mark}</span>
}

export default Mark
