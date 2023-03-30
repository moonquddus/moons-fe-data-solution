import { RouterProvider } from "react-router-dom"
import { router } from "../../../router"
import './App.css'

function App() {
  const baseClass = 'f-app'
  return (
    <div className={baseClass}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
