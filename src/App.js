import {BrowserRouter, Switch, Route} from "react-router-dom"

import AuthPage from "./pages/AuthPage"
import {CalendarPage} from "./pages/CalendarPage"
import {AuthProvider} from "./Context/Auth"
import PrivateRoute from "./components/PrivateRouter"
import "./styles/globalStyle.css"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AuthPage} exact />
          <Route path="/signup" component={SignUp} exact />
          {/* <Route path="/calendar" component={CalendarPage} exact /> */}
          <PrivateRoute path="/calendar" exact component={CalendarPage} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
