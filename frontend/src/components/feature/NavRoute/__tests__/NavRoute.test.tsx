import { screen, waitFor } from "@testing-library/react"
import NavRoute from "../NavRoute"
import Insights from "../../../page/Insights/Insights"
import { renderWithRouter } from "../../../../lib/testing/utils"
import { Provider } from "react-redux"
import store from "../../../../lib/store"

describe('NavRoute rendering', () => {
  it('should the child component wrapped with a navbar', async () => {
    renderWithRouter(
      <Provider store={store}>
        <NavRoute><Insights /></NavRoute>
      </Provider>
    )

    waitFor(async () => {
      expect(screen.queryByTestId('Navbar')).toBeInTheDocument()
      expect(screen.queryByTestId('InsightsPage')).toBeInTheDocument()
    })
  })
})
