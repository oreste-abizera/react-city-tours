import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Tourlist from './components/Tourlist'

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Navbar />
      <Tourlist />
      </React.Fragment>
    </div>
  );
}

export default App;
