import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {
  const reactConfig = {
    ripple: true
  };

  return (
    <div className="App">
      <PrimeReactProvider value={reactConfig}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
