import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  // On mount, set dark mode if user prefers
  React.useEffect(() => {
    const userPref = localStorage.getItem('darkMode');
    if (
      userPref === 'true' ||
      (userPref === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    }
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#181818] transition-colors duration-300">
      <Navbar />
      <Hero />
      <Services />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
