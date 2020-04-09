import React from 'react';
import './App.css';
import Transactions from './Components.js/Transactions';
import Balance from './Components.js/Balance';

function App() {
   return (
      <div className="App">
         Basic BC Wallet
         <Balance />
         <Transactions />
      </div>
   );
}

export default App;
