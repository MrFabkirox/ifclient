import React from 'react';
import logo from './logo.svg';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalProvider>

      <header className="App-header">

        <Header />

        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </GlobalProvider>
    </div>
  );
}

export default App;
