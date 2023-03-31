import { createBrowserRouter } from "react-router-dom"
import NavRoute from "./components/feature/NavRoute/NavRoute"
import Home from "./components/page/Home/Home"
import Insights from "./components/page/Insights/Insights"
import ViewChart from "./components/page/ViewChart/ViewChart"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavRoute><Home /></NavRoute>,
  },
  {
    path: '/insights',
    element: <NavRoute><Insights /></NavRoute>,
  },
  {
    // I wanted the chart page to replicate an experience for a public user
    // So I did not include the navbar which assumes you are logged in
    path: '/view-chart/:id',
    element:<ViewChart />,
  }
])
