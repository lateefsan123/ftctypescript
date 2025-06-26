// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CharacterSelect from './components/CharacterSelect';
import CharacterPage from './pages/CharacterPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterSelect />} />
        <Route path="/:char" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
