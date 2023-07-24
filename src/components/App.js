import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import ScrollToTop from './ScrollToTop';
import FadeTransition from "./FadeTransition";
import '../styles/FadeTransition.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
       {/* Use the render method to pass location */}
       <Route path="/" element={<FadeTransition><Home /></FadeTransition>} />
        <Route path="/portfolio" element={<FadeTransition><Portfolio /></FadeTransition>} />
      </Routes>
    </Router>
  );
}

export default App;
