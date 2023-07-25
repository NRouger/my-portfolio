import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import ScrollToTop from './ScrollToTop';
import FadeTransition from "./FadeTransition";
import '../styles/FadeTransition.css';
import StackPage from './StackPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<FadeTransition><Home /></FadeTransition>} />
        <Route path="/portfolio" element={<FadeTransition><Portfolio /></FadeTransition>} />
        <Route path="/stack" element={<StackPage />}/>
        {/* <Route path="/about" element={}/> */}

      </Routes>
    </Router>
  );
}

export default App;
