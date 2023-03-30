import { screen, waitFor } from "@testing-library/react"
import NavRoute from "../LoggedOutRoute"
import Insights from "../../../page/Insights/Insights"
import { renderWithRouter } from "../../../../lib/testing/utils"

describe('NavRoute rendering', () => {
  it('should the child component wrapped with a navbar', async () => {
    renderWithRouter(
      <NavRoute><Insights /></NavRoute>
    )

    waitFor(async () => {
      expect(screen.queryByTestId('Navbar')).toBeInTheDocument()
      expect(screen.queryByTestId('InsightsPage')).toBeInTheDocument()
    })
  })
})
