import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PropsWithChildren, ReactElement } from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import prodStore from "../store"
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore"

// I probably could have done something to combine these two functions
// Or at the very least, make them composable together
export function renderWithRouter(ui: ReactElement, {route = '/'} = {}) {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent,
    ...render(ui, {wrapper: BrowserRouter}),
  }
}

export function renderWithProviders(
  ui: React.ReactElement,
  store: ToolkitStore | null = null,
) {
  const renderStore = store ?? prodStore
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      <Provider store={renderStore}>{children}</Provider>
    )
  }

  return { user: userEvent, renderStore, ...render(ui, { wrapper: Wrapper }) }
}