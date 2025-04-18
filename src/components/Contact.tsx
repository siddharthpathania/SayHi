import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+91 7840933948</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">sayhiai.official@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56v14.91c0 2.52-2.04 4.56-4.56 4.56H4.56C2.04 24 0 21.96 0 19.44V4.56C0 2.04 2.04 0 4.56 0h14.91C21.96 0 24 2.04 24 4.56zM9.75 19.44h4.5v-6.75h3l.75-3h-3.75V8.25c0-.75.75-1.5 1.5-1.5h2.25V3.75h-3c-2.25 0-3.75 1.5-3.75 3.75v2.25H9.75v3h3v6.75z" />
              </svg>
              <div>
                <h3 className="font-bold mb-2">Facebook</h3>
                <a href="https://x.com/Sayhi_Ai_?t=pLgCxV_lORPxP-aNsnTZXQ&s=08" className="text-blue-600 dark:text-blue-400">SayHiAi (@Sayhi_Ai_)</a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.58 8.1 8 8.9v-6.3h-2.4v-2.6h2.4v-2c0-2.4 1.44-3.7 3.6-3.7 1.04 0 2.12.18 2.12.18v2.34h-1.2c-1.18 0-1.54.74-1.54 1.5v1.68h2.6l-.42 2.6h-2.18v6.3c4.42-.8 8-4.48 8-8.9 0-5.52-4.48-10-10-10z" />
              </svg>
              <div>
                <h3 className="font-bold mb-2">Instagram</h3>
                <a href="https://www.instagram.com/sayhiai_official?igsh=MWI1ZXp1bjVncjRnYw==" className="text-blue-600 dark:text-blue-400">@sayhiai_official</a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-gray-600 dark:text-gray-300">
                Flat No. 6, Third Floor
Camille Apartments
behind Clover Classic, in the charming Lane B
Koregaon Park<br />
Pune, Maharashtra – 411001
                </p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;