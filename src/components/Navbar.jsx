import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.jpeg" alt="Sahal Healthcare Logo" className="h-12 w-auto mr-3 rounded-md shadow-sm" />
          <div>
            <span className="text-xl font-bold text-brand-blue">Sahal</span>
            <span className="text-xl font-bold text-brand-green"> Healthcare</span>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-brand-blue hover:text-brand-light-blue font-medium px-2 py-1 border-b-2 border-transparent hover:border-brand-blue transition-all duration-300">Home</a>
          <a href="#services" className="text-brand-blue hover:text-brand-light-blue font-medium px-2 py-1 border-b-2 border-transparent hover:border-brand-green transition-all duration-300">Services</a>
          <a href="#booking" className="text-brand-blue hover:text-brand-light-blue font-medium px-2 py-1 border-b-2 border-transparent hover:border-brand-orange transition-all duration-300">Booking</a>
          <a href="#contact" className="text-brand-blue hover:text-brand-light-blue font-medium px-2 py-1 border-b-2 border-transparent hover:border-brand-blue transition-all duration-300">Contact</a>
        </div>
        
        {/* Book Now button */}
        <div className="hidden md:block">
          <a 
            href="#booking" 
            className="bg-brand-green hover:bg-brand-dark-green text-white px-4 py-2 rounded-md transition-all duration-300 shadow-md font-medium"
          >
            Book Now
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="text-brand-blue focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg mt-2 py-3 px-4 absolute w-full transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-3">
            <a href="#home" className="text-brand-blue hover:text-brand-light-blue font-medium py-2 border-b border-gray-100" onClick={toggleMobileMenu}>Home</a>
            <a href="#services" className="text-brand-blue hover:text-brand-light-blue font-medium py-2 border-b border-gray-100" onClick={toggleMobileMenu}>Services</a>
            <a href="#booking" className="text-brand-blue hover:text-brand-light-blue font-medium py-2 border-b border-gray-100" onClick={toggleMobileMenu}>Booking</a>
            <a href="#contact" className="text-brand-blue hover:text-brand-light-blue font-medium py-2" onClick={toggleMobileMenu}>Contact</a>
            <a 
              href="#booking" 
              className="bg-brand-green hover:bg-brand-dark-green text-white px-4 py-2 rounded-md transition-all duration-300 text-center mt-2 font-medium"
              onClick={toggleMobileMenu}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
