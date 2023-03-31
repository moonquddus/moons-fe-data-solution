import { FormEventHandler, useState } from 'react'
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
    if (!activeThread || !input) return
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
  /**
   * I was a bit cheeky here, not adding a physical send button
   * It works fine with an enter key, but for full a11y there should be a submit button the user can click on
   */
  return (
    <form action='' onSubmit={submitHandler} className={baseClass} data-testid='CommentForm'>
      <input data-testid='CommentInput' className={`${baseClass}__input`} type='text' value={input} onChange={event => setInput(event.target.value)} placeholder='Add comment...' name='comment-input' aria-label='Add comment' autoComplete='none' />
    </form>
  )
}

export default CommentInput
