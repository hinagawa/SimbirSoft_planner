import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
// import PrivateRoute from "./components/PrivateRouter";
import AuthPage from "./pages/AuthPage"
import MainPage from "./pages/MainPage";
import "./styles/globalStyle.css"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AuthPage} exact />
        <Route path="/main" component={MainPage} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
