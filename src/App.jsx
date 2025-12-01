import React from 'react';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navbar from './components/NavBar';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
