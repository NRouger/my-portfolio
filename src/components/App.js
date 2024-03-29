import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import ScrollToTop from './ScrollToTop';
import FadeTransition from "./FadeTransition";
import '../styles/FadeTransition.css';
import StackPage from '../pages/StackPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<FadeTransition><Home /></FadeTransition>} />
        <Route path="/portfolio" element={<FadeTransition><Portfolio /></FadeTransition>} />
        <Route path="/stack" element={<StackPage />} />
      </Routes>
    </Router>
  );
}

export default App;
