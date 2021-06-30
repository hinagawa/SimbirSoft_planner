import {BrowserRouter, Switch, Route} from "react-router-dom"

import SignIn from "./pages/SignIn"
import {CalendarPage} from "./pages/CalendarPage"
import {AuthProvider} from "../src/Context/auth"
import PrivateRoute from "./components/PrivateRoute"
import "./styles/globalStyle.css"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={SignIn} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/calendar" component={CalendarPage} exact />
          <PrivateRoute path="/calendar" exact component={CalendarPage} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App