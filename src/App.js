import logo from './logo.svg';
import './App.scss';
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/Register/RegisterPage'
import StripePaymentsPage from './Pages/StripePaymentsPage/StripePaymentsPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div style={{width:"100%", height:"100%"}}>
          <Router>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
        {/* <h1>Welcome to EmpoLink</h1> */}
        {/* <LoginPage/> */}
        {/* <RegisterPage/> */}
        {/* <StripePaymentsPage/> */}
    </div>
  );
}

export default App;
