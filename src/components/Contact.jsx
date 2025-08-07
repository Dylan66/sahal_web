import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:bg-[#23272f] dark:bg-none">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-brand-blue rounded-full mb-4 font-medium text-sm dark:bg-[#23272f] dark:text-brand-green">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-brand-blue dark:text-brand-green">Contact</span> <span className="text-brand-green">Us</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
            Have questions or need more information? Reach out to our team at Sahal Healthcare.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-white dark:bg-[#23272f] rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-brand-blue dark:text-brand-green mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Send Us a Message
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-md dark:bg-brand-green dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-brand-green mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-200">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white dark:bg-[#23272f] rounded-lg">
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-1" htmlFor="name">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-1" htmlFor="email">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-1" htmlFor="message">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Your message here..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-blue text-white py-3 px-4 rounded-lg hover:bg-brand-dark-blue transition duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-opacity-50 disabled:opacity-70 font-medium shadow-md dark:bg-brand-dark-blue dark:text-white"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
            
            <div className="lg:w-1/2 bg-gradient-to-br from-brand-light-blue to-brand-blue relative overflow-hidden dark:bg-[#23272f]">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full transform -translate-x-10 -translate-y-10"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-green opacity-10 rounded-full transform translate-x-10 translate-y-10"></div>
              
              <div className="h-64 lg:h-full relative z-10 flex items-center justify-center">
                {/* Map placeholder */}
                <div className="w-full h-full bg-white bg-opacity-10 dark:bg-[#23272f] flex items-center justify-center p-8">
                  <div className="text-center p-4 bg-white bg-opacity-90 dark:bg-[#23272f] dark:bg-opacity-90 rounded-lg shadow-lg max-w-md mx-auto">
                    <div className="w-16 h-16 bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-brand-green mb-2">Our Location</h3>
                    <p className="text-gray-600 dark:text-gray-200 mb-4">Visit us at our modern facility equipped with the latest healthcare technology.</p>
                    <p className="text-brand-blue dark:text-brand-green font-medium text-lg">123 Medical Plaza, Nairobi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#23272f] p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700 group hover:border-brand-blue">
              <div className="w-16 h-16 bg-blue-100 dark:bg-[#23272f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-blue group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-blue dark:text-brand-green mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-200">+123 456 7890</p>
              <p className="text-gray-600 dark:text-gray-200">+123 456 7891</p>
            </div>
            
            <div className="bg-white dark:bg-[#23272f] p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700 group hover:border-brand-green">
              <div className="w-16 h-16 bg-green-100 dark:bg-[#23272f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-green group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-green dark:text-brand-green mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-200">info@sahalhealthcare.com</p>
              <p className="text-gray-600 dark:text-gray-200">appointments@sahalhealthcare.com</p>
            </div>
            
            <div className="bg-white dark:bg-[#23272f] p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700 group hover:border-brand-orange">
              <div className="w-16 h-16 bg-orange-100 dark:bg-[#23272f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-orange transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-orange group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-orange dark:text-brand-green mb-2">Working Hours</h3>
              <p className="text-gray-600 dark:text-gray-200">Monday - Friday: 8am - 6pm</p>
              <p className="text-gray-600 dark:text-gray-200">Saturday: 9am - 1pm</p>
              <p className="text-gray-600 dark:text-gray-200">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
