import './App.css';
import AccountCreation from './components/CreateAccount/InputPhoneNumber';
import InputEmailPass from './components/CreateAccount/InputEmailPass';
import EnterVerifCode from './components/EnterVerifCode';

function App() {
  return (
    <div className=" w-[375px] min-h-screen p-4 mx-auto">
      <AccountCreation/>
      <InputEmailPass/>
      <EnterVerifCode />
    </div>
  );
}

export default App;
