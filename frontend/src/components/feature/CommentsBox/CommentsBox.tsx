import { useEffect, useMemo, useState } from 'react'
import { ActiveThreadPayload } from '../../../lib/model/comment'
import { useLazyGetSingleThreadQuery } from '../../../lib/service/coment.api'
import './CommentsBox.css'

interface CommentsBoxProps {
  activeThread?: ActiveThreadPayload | null
}

function CommentsBox({activeThread}: CommentsBoxProps) {
  const [trigger, commentThread] = useLazyGetSingleThreadQuery()
  useEffect(() => {
    if (!!activeThread?.id) {
      trigger(activeThread?.id)
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
      <ul className={`${baseClass}__thread`}>
        {hasComments && commentThread.data?.comments.map((comment, key) => (
          <li className={`${baseClass}__comment`} key={`comment-${key}`}>
            <div className={`${baseClass}__author`}>{comment.userName}</div>
            <p className={`${baseClass}__text`}>{comment.text}</p>
          </li>
        ))}

      </ul>
    </section>
  )
}

export default CommentsBox
