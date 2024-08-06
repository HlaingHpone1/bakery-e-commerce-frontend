import { DarkThemeContextProvider } from "./context/DarkThemeContext"
import Router from "./router/Router"


function App() {

  return (
    <>
      <DarkThemeContextProvider>
        <Router />
      </DarkThemeContextProvider>
    </>
  )
}

export default App
