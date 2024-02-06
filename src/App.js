// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SongChart from './SongChart';
import SongDetails from './SongDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<SongChart />} />
          <Route path="/song/:id" element={<SongDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
