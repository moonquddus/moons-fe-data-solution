import { FormEventHandler, useEffect, useState } from 'react'
import { ActiveThreadPayload } from '../../../lib/model/comment'
import Comment from '../Comment/Comment'
import { useLazyGetSingleThreadQuery, useRespondToThreadMutation } from '../../../lib/service/coment.api'
import './CommentsBox.css'
import CommentInput from '../CommentInput/CommentInput'

interface CommentsBoxProps {
  activeThread?: ActiveThreadPayload | null
}

function CommentsBox({activeThread}: CommentsBoxProps) {
  const [getComments, commentThread] = useLazyGetSingleThreadQuery()
  useEffect(() => {
    if (!!activeThread?.id) {
      getComments(activeThread?.id)
    }
  }, [activeThread?.id])

  const hasComments = !!activeThread?.id && !!commentThread.data

  const baseClass = 'f-comments-box'
  return (
    <section className={baseClass}>
      {!activeThread && (
        <p>Click on a data point to view comments</p>
      )}
      {activeThread && (
        <h2>Comments ({activeThread.chartDataPoint.country} - {activeThread.chartDataPoint.feature})</h2>
      )}
      {commentThread.isLoading && (
        <p>Loading comments...</p>
      )}
      {commentThread.isError && (
        <p>Error loading comments!</p>
      )}
      <ul className={`${baseClass}__thread`}>
        {hasComments && commentThread.data?.comments.map((comment, key) => (
          <Comment key={`comment-${key}`} comment={comment} />
        ))}
      </ul>
      {activeThread && (
        <CommentInput activeThread={activeThread} />
      )}
    </section>
  )
}

export default CommentsBox
