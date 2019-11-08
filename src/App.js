import React from 'react';
import logo from './logo.svg';
import TestComponent from './components/test/test';
import Dashboard from './components/dashboard/dashboard';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TestComponent /> */}
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
