import './App.css';
import AccountCreation from './components/CreateAccount/InputPhoneNumber';
import InputEmailPass from './components/CreateAccount/InputEmailPass';
import EnterVerifCode from './components/EnterVerifCode';
import LoginSuccessPage from './components/LoginSuccessPage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className=" w-[375px] min-h-screen p-4 mx-auto">
      <AccountCreation/>
      <InputEmailPass/>
      <EnterVerifCode />
      <LoginSuccessPage />
      <Dashboard />
    </div>
  );
}

export default App;
