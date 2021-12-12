import React from 'react';
import Header from '../src/components/Header/Header.component';
import Dashboard from '../src/components/Dashboard/Dashboard.component';
import TransactionsHeader from '../src/components/TransactionsHeader/TransactionsHeader.component';
import Payments from '../src/components/Payments/Payments.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <TransactionsHeader />
      <Payments />
    </div>
  );
}

export default App;
