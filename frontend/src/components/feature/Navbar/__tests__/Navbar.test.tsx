import { act, render, screen, waitFor } from "@testing-library/react"
import { RouterProvider } from "react-router-dom"
import { router } from "../../../../router"
import userEvent from '@testing-library/user-event'

describe('navbar physical navigation', () => {
  it('should take you to a new page on click', async () => {
    render(<RouterProvider router={router} />)

    await waitFor(async () => {
      expect(screen.queryByTestId('Navbar')).toBeInTheDocument()
      expect(screen.queryByTestId('HomePage')).toBeInTheDocument()
    })

    act(() => {
      userEvent.click(screen.getByTestId('NavbarInsights'))
    })

    waitFor(async () => {
      expect(screen.queryByTestId('InsightsPage')).toBeInTheDocument()
    })
  })
})
