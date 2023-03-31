import { waitFor, screen } from '@testing-library/react'
import fetchMock from 'fetch-mock'
import { createActiveThread, createNewActiveThread } from '../../../../lib/testing/fixtures'
import { mockGetSingleThread } from '../../../../lib/testing/service'
import { renderWithProviders } from '../../../../lib/testing/utils'
import CommentsBox from '../CommentsBox'

afterEach(() => {
  fetchMock.reset()
})

/**
 * Would be worth having another test for the comment input itself
 */
describe('rendering comments box for active threads', () => {
  it('should render comments for an existing thread', () => {
    mockGetSingleThread()
    const activeThread = createActiveThread()
    renderWithProviders(<CommentsBox activeThread={activeThread} />)
    waitFor(() => {
      expect(screen.queryByTestId('CommentsBoxThread')).toBeInTheDocument()
    })
  })

  it('should render an empty box for a new thread', () => {
    const activeThread = createNewActiveThread()
    renderWithProviders(<CommentsBox activeThread={activeThread} />)
    waitFor(() => {
      expect(screen.queryByTestId('CommentsBoxNewThread')).toBeInTheDocument()
    })
  })

  it('should be blank if no data point selected', () => {
    renderWithProviders(<CommentsBox />)
    waitFor(() => {
      expect(screen.queryByTestId('CommentsBoxBlank')).toBeInTheDocument()
    })
  })
})
