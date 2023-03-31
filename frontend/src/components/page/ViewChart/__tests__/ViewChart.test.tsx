import { waitFor, screen, act } from '@testing-library/react'
import fetchMock from 'fetch-mock'
import { redirect, RouterProvider } from 'react-router-dom'
import { mockGetSharedChart, mockGetShareLink } from '../../../../lib/testing/service'
import { renderWithProviders } from '../../../../lib/testing/utils'
import { router } from '../../../../router'

afterEach(() => {
  fetchMock.reset()
})

describe('rendering a shared chart', () => {
  it('should succesfully render a chart given the correct token', () => {
    mockGetSharedChart()
    renderWithProviders(<RouterProvider router={router} />)
    redirect('/view-chart/123-abc')

    waitFor(() => {
      expect(screen.queryByTestId('InsightsChart')).toBeInTheDocument()
    })
  })
  
  it('should show an error message if the token is incorrect', () => {
    mockGetSharedChart()
    renderWithProviders(<RouterProvider router={router} />)
    redirect('/view-chart/incorrect-token')

    waitFor(() => {
      expect(screen.queryByTestId('InsightsChart')).not.toBeInTheDocument()
    })
  })
})

