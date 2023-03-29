import { RouterProvider } from "react-router-dom"
import { router } from "../../../router"
import Navbar from "../Navbar/Navbar"

function App() {
  const baseClass = 'f-app'
  return (
    <div className={baseClass}>
      <Navbar />
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  )
}

export default App
