import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import Page from './components/pages/Page';

function App() {

  return (
    <Router>
      <Navbar />
      <Page />
    </Router>
  );
}

export default App;
