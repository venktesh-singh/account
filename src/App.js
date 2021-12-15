import logo from './logo.svg';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import { AmountList } from './components/AccountList';
import { AddAmount } from './components/AddAmount';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <h1> Account Holder Listing </h1>
        <AmountList/>
        <AddAmount/>
        <Routes>
          <Route path="/" component={AmountList} exact />
          <Route path="/add" component={AddAmount} exact />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
