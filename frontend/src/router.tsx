import { createBrowserRouter } from "react-router-dom"
import Home from "./components/page/Home/Home"
import Insights from "./components/page/Insights/Insights"
import ViewChart from "./components/page/ViewChart/ViewChart"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/insights',
    element: <Insights />,
  },
  {
    path: '/view-chart/:id',
    element: <ViewChart />,
  }
])
