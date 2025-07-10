import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataGridComponent from './components/DataGridComponent';
import DetailView from './components/DetailView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataGridComponent />} />
        <Route path="/details/:id" element={<DetailView />} />
      </Routes>
    </Router>
  );
}

export default App;

