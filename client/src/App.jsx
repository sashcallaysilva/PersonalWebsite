import React from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import LanguageToggle from './components/LanguageToggle';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      {/* Sitewide language toggle */}
      <LanguageToggle />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;