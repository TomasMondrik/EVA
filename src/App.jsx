import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProcessSection from './components/ProcessSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
    </div>
  );
}

export default App;