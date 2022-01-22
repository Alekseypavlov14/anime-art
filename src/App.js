import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ViewBox from './components/ViewBox/ViewBox';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <ViewBox />
    </div>
  );
}

export default App;
