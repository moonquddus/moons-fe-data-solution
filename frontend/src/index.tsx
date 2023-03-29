import ReactDOM from "react-dom/client"
import "./lib/style/index.css"
import App from "./components/feature/App/App"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(<App />)
