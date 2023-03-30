import ReactDOM from "react-dom/client"
import "./lib/style/index.css"
import App from "./components/feature/App/App"
import { Provider } from "react-redux"
import store from "./lib/store"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
