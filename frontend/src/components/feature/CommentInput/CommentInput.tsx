import { FormEventHandler, useState } from 'react'
import { act } from 'react-dom/test-utils'
import { ActiveThreadPayload } from '../../../lib/model/comment'
import { useCreateThreadMutation, useRespondToThreadMutation } from '../../../lib/service/coment.api'
import './CommentInput.css'

interface CommentInputProps {
  activeThread?: ActiveThreadPayload | null
}

function CommentInput({activeThread}: CommentInputProps) {
  const [input, setInput] = useState('')
  const [setComment] = useRespondToThreadMutation()
  const [setThread] = useCreateThreadMutation()

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (!activeThread) return
    setInput('')
    if (activeThread.id){
      setComment({
        id: activeThread.id,
        comment: {
          user_name: 'John',
          text: input,
        }
      })
      return
    }
    setThread({
      chartDataPoint: {
        country: activeThread.chartDataPoint.country,
        feature: activeThread.chartDataPoint.feature,
      },
      comment: {
        user_name: 'John',
        text: input,
      }
    })
  }

  const baseClass = 'f-comment-input'
  return (
    <form action='' onSubmit={submitHandler} className={baseClass}>
      <input className={`${baseClass}__input`} type='text' value={input} onChange={event => setInput(event.target.value)} placeholder='Add comment...' name='comment-input' aria-label='Add comment' autoComplete='none' />
    </form>
  )
}

export default CommentInput
