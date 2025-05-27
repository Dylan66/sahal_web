import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-opacity-70 z-0">
        {/* Background pattern or image can be added here */}
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
              Sahal Healthcare
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-700 mb-6">
              Modern care for women and men
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Led by <span className="font-semibold">Dr. Andrew</span>, 
              <span className="block mt-1">Specialist in Reproductive Health</span>
            </p>
            <div className="flex space-x-4">
              <a 
                href="#booking" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
              >
                Book Appointment
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Video placeholder */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="mt-4 text-gray-600">Watch our intro video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
