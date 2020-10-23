import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/TestsMap'
import TestsMap from './components/TestsMap';

function App() {
  return (
    <div className="App">
     <h1> Covid Testing Near Me</h1>
     <TestsMap/> 
    </div>
  );
}

export default App;
