import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import profileData from './profileData.json';
function App() {
  return (
    <div>
      <Header profileData={profileData} />
      <About profileData={profileData} />
      <Portfolio profileData={profileData} />
      <Resume profileData={profileData} />
      <Contact profileData={profileData} />
      <Footer profileData={profileData} />
    </div>
  );
}

export default App;
