import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import questConfig from './config/questConfig';
import Navigation from './components/layout/Navigation';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Explore from './pages/Explore';
import Library from './pages/Library';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Upload from './pages/Upload';

const App = () => {
  return (
    <QuestProvider
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiType="PRODUCTION"
    >
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navigation />
          <main className="pt-16 lg:pl-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch/:id" element={<Watch />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/library" element={<Library />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/upload" element={<Upload />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QuestProvider>
  );
};

export default App;