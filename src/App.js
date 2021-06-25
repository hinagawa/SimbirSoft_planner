import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
// import PrivateRoute from "./components/PrivateRouter";
import AuthPage from "./pages/AuthPage"
import "./styles/globalStyle.css"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AuthPage} exact />
        {/* <PrivateRoute path="/main" component={MainPage} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
