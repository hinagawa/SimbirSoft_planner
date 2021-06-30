import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { CalendarPage } from "./pages/CalendarPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./styles/globalStyle.css"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignIn} exact />
          <Route path="/signup" component={SignUp} exact />
          {/* <Route path="/calendar" component={CalendarPage} exact /> */}
          <PrivateRoute path="/calendar" exact component={CalendarPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
