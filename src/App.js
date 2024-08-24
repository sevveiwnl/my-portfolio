import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <Home />
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;


