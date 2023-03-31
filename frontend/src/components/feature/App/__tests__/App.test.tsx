import { render, screen } from '@testing-library/react'
import App from '../App'

describe('rendering the app', () => {
  it('should render the homepage by default', () => {
    const wrapper = render(<App />)
    expect(screen.getByText(/Homepage/i)).toBeInTheDocument()
  })
})
