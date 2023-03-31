import { render } from '@testing-library/react'
import { createComment } from '../../../../lib/testing/fixtures'
import Comment from '../Comment'

describe('rendering comment', () => {
  it('should correctly render the comment, given the props', () => {
    const comment = createComment()
    const wrapper = render(<Comment comment={comment} />)
    expect(wrapper.baseElement).toMatchSnapshot()
  })
})
