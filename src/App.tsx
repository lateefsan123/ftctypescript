// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CharacterSelect from './components/CharacterSelect';
import CharacterPage from './pages/CharacterPage';

const App: React.FC = () => {
  const basename = import.meta.env.MODE === 'production' ? '/ftctypescript' : '/';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<CharacterSelect />} />
        <Route path="/:char" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
