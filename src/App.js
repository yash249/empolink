import logo from './logo.svg';
import './App.scss';
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/Register/RegisterPage'
import StripePaymentsPage from './Pages/StripePaymentsPage/StripePaymentsPage'

function App() {
  return (
    <div style={{width:"100%", height:"100%"}}>
        {/* <h1>Welcome to EmpoLink</h1> */}
        <LoginPage/>
        {/* <RegisterPage/> */}
        {/* <StripePaymentsPage/> */}
    </div>
  );
}

export default App;
