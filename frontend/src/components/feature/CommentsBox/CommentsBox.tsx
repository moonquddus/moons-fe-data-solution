import { ActiveThreadPayload } from '../../../lib/model/comment'
import './CommentsBox.css'

interface CommentsBoxProps {
  activeThread?: ActiveThreadPayload | null
}

function CommentsBox({activeThread}: CommentsBoxProps) {
  //console.log("ACTIVE THREAD", activeThread)
  const baseClass = 'f-comments-box'
  return (
    <div className={baseClass}>
      <p>Click on a data point to view comments</p>
      
    </div>
  )
}

export default CommentsBox
