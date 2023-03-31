import { waitFor, screen, act } from '@testing-library/react'
import fetchMock from 'fetch-mock'
import { mockGetChartData, mockGetCommentThreads } from '../../../../lib/testing/service'
import { renderWithProviders } from '../../../../lib/testing/utils'
import InsightsOverview from '../InsightsOverview'

afterEach(() => {
  fetchMock.reset()
})

describe('insights chart', () => {
  it('should render a chart, given chart data information', () => {
    mockGetChartData()
    mockGetCommentThreads()
    renderWithProviders(<InsightsOverview />)

    waitFor(() => {
      expect(screen.queryByTestId('InsightsChart')).toBeInTheDocument()
    })
  })
})

