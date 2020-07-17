import React from 'react';
import './App.scss';
import Dashboard from './pages/Dashboard';
import Store from './global/Store.js';

function App() {
  return (
    <div className="App">
      <Store>
      <Dashboard></Dashboard>
      </Store>
    </div>
  );
}

export default App;
