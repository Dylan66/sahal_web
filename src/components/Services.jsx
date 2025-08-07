import React from 'react';

const ServiceCard = ({ title, description, icon, color }) => {
  // Define color classes based on the color prop
  const colorClasses = {
    blue: {
      bg: 'bg-blue-100',
      icon: 'text-brand-blue',
      title: 'text-brand-blue',
      hover: 'hover:border-brand-blue',
      hoverBg: 'group-hover:bg-brand-blue'  
    },
    green: {
      bg: 'bg-green-100',
      icon: 'text-brand-green',
      title: 'text-brand-green',
      hover: 'hover:border-brand-green',
      hoverBg: 'group-hover:bg-brand-green'
    },
    orange: {
      bg: 'bg-orange-100',
      icon: 'text-brand-orange',
      title: 'text-brand-orange',
      hover: 'hover:border-brand-orange',
      hoverBg: 'group-hover:bg-brand-orange'
    }
  };
  
  const classes = colorClasses[color] || colorClasses.blue;
  
  return (
    <div className={`group bg-white dark:bg-[#23272f] p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 ${classes.hover} relative overflow-hidden`}>
      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 rotate-45 ${classes.bg} opacity-30`}></div>
      
      <div className="relative z-10">
        <div className={`w-16 h-16 ${classes.bg} rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:text-white ${classes.hoverBg}`}>
          <div className={`${classes.icon} group-hover:text-white transition-colors duration-300`}>
            {icon}
          </div>
        </div>
        <h3 className={`text-xl font-bold mb-4 ${classes.title} dark:text-brand-green`}>{title}</h3>
        <p className="text-gray-600 dark:text-gray-200 leading-relaxed">{description}</p>
        
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
          <a href="#booking" className={`inline-flex items-center ${classes.title} dark:text-brand-green font-medium hover:underline`}>
            Book Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Gynaecology",
      description: "Comprehensive women's health services including routine check-ups, diagnostics, and specialized treatments for various gynecological conditions.",
      color: "blue",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Men's Fertility",
      description: "Specialized care for male reproductive health, fertility assessments, and treatment options to help you achieve your family planning goals.",
      color: "green",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Lab Tests",
      description: "State-of-the-art diagnostic testing services with quick and accurate results for informed healthcare decisions and personalized treatment plans.",
      color: "orange",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-green-100 text-brand-green rounded-full mb-4 font-medium text-sm">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-brand-blue">Our</span> <span className="text-brand-green">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Sahal Healthcare, we provide comprehensive healthcare services tailored to your specific needs with a focus on quality and compassionate care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center bg-gradient-to-r from-brand-blue via-brand-green to-brand-orange p-0.5 rounded-xl max-w-3xl mx-auto">
          <div className="bg-white py-8 px-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Need a specialized service?</h3>
            <p className="text-gray-600 mb-6">Contact us to learn more about our full range of healthcare services.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#booking" 
                className="px-8 py-3 bg-brand-green text-white rounded-lg hover:bg-brand-dark-green transition duration-300 shadow-md inline-block font-medium"
              >
                Book a Service
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border-2 border-brand-orange text-brand-dark-orange rounded-lg hover:bg-orange-50 transition duration-300 inline-block font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
