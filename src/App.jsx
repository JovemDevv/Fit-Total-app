import { createBrowserRouter } from "react-router-dom"
import Routes from "./routes"
import Auth from "./contexts/auth"



function App() {


  return (
    <>
    <Auth>
      <Routes />
    </Auth>
    </>
  )
}

export default App
