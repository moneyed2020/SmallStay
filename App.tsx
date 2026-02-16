import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ListProperty from './pages/ListProperty';
import Hotels from './pages/Hotels';
import Cars from './pages/Cars';
import Boats from './pages/Boats';
import Affiliate from './pages/Affiliate';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased text-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/boats" element={<Boats />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list-property" element={<ListProperty />} />
          <Route path="/affiliate" element={<Affiliate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
