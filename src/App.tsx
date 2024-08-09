import AlertBox from "./components/alertBox/AlertBox";
import { DarkThemeContextProvider } from "./context/DarkThemeContext";
import Router from "./router/Router";

function App() {
  return (
    <>
      <DarkThemeContextProvider>
        <Router />
      </DarkThemeContextProvider>
      <AlertBox />
    </>
  );
}

export default App;
