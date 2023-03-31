import { Comment } from '../../../lib/model/comment'
import './Comment.css'

interface CommentProps {
  comment: Comment
}
/**
 * This can technically go inside element directory
 * As it's not actually doing anything, just a lovely minimal visual component
 */
function ChartComment({comment}: CommentProps) {
  const baseClass = 'f-comment'
  return (
    <li className={baseClass}>
      <div className={`${baseClass}__author`}>{comment.userName}</div>
      <p className={`${baseClass}__text`}>{comment.text}</p>
    </li>
  )
}

export default ChartComment
