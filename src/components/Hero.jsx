import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-blue-50 via-white to-green-50 dark:bg-[#23272f] dark:bg-none">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-light-blue rounded-bl-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-light-green rounded-tr-full opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-brand-light-orange rounded-full opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block px-4 py-1 bg-blue-100 text-brand-blue rounded-full mb-4 font-medium text-sm dark:bg-[#23272f] dark:text-brand-green">
              Trusted Healthcare Provider
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-brand-blue dark:text-brand-green">Sahal</span> 
              <span className="text-brand-green">Healthcare</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-6">
              Modern care for women and men
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 border-l-4 border-brand-orange pl-4 py-2 bg-orange-50 dark:bg-[#23272f] rounded-r-md">
              Led by <span className="font-semibold text-brand-dark-blue dark:text-brand-green">Dr. Andrew</span>, 
              <span className="block mt-1">Specialist in Reproductive Health</span>
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="#booking" 
                className="px-6 py-3 bg-brand-green text-white rounded-lg hover:bg-brand-dark-green transition duration-300 shadow-lg text-center sm:text-left font-medium dark:bg-brand-dark-green dark:text-white"
              >
                Book Appointment
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 border-2 border-brand-orange text-brand-dark-orange rounded-lg hover:bg-orange-50 transition duration-300 text-center sm:text-left font-medium dark:bg-[#23272f] dark:text-brand-orange"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Video placeholder with gradient border */}
              <div className="p-1 rounded-lg bg-gradient-to-br from-brand-blue via-brand-green to-brand-orange dark:bg-[#23272f]">
                <div className="aspect-w-16 aspect-h-9 bg-white dark:bg-[#23272f] rounded-lg shadow-xl flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8 relative z-10 bg-gray-50 bg-opacity-90 dark:bg-[#23272f] dark:bg-opacity-90 w-full h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 mx-auto bg-brand-orange rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-dark-orange transition duration-300 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="mt-4 text-gray-700 font-medium">Watch our intro video</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-brand-light-green rounded-lg opacity-20 transform rotate-12"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-light-blue rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
