import { render } from '@testing-library/react'
import Button from '../Button'

describe('rendering button', () => {
  it('should render children inside the button', () => {
    const wrapper = render(<Button>Hello I'm a button</Button>)
    expect(wrapper.baseElement).toMatchSnapshot()
  })
})
