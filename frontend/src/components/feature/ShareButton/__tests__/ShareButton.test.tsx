import { waitFor, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import fetchMock from 'fetch-mock'
import { mockGetShareLink } from '../../../../lib/testing/service'
import { renderWithProviders } from '../../../../lib/testing/utils'
import ShareButton from '../ShareButton'

afterEach(() => {
  fetchMock.reset()
})

describe('share link', () => {
  it('should generate a share link on button click', () => {
    mockGetShareLink()
    renderWithProviders(<ShareButton />)

    act(() => {
      userEvent.click(screen.getByTestId('ShareButton'))
    })
    waitFor(() => {
      expect(screen.queryByTestId('ShareLink')).toBeInTheDocument()
    })
  })
})
