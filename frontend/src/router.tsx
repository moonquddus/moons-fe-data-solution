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
    path: '/view-chart/:id',
    element:<ViewChart />,
  }
])
