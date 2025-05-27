import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.jpeg" alt="Sahal Healthcare Logo" className="h-10 w-auto mr-2" />
          <span className="text-xl font-bold text-blue-900">Sahal Healthcare</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-blue-900 hover:text-blue-600 font-medium">Home</a>
          <a href="#services" className="text-blue-900 hover:text-blue-600 font-medium">Services</a>
          <a href="#booking" className="text-blue-900 hover:text-blue-600 font-medium">Booking</a>
          <a href="#contact" className="text-blue-900 hover:text-blue-600 font-medium">Contact</a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-blue-900 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
