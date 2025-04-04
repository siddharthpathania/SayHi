import React from 'react';
import { Bot, Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">AI-Powered Support</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Next-Gen
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Customer Support
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Transform your customer service experience with our cutting-edge AI support system.
              Available 24/7, smarter with every interaction, delivering up to 
              <span className="font-bold text-blue-600"> 80% faster response times</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transform hover:scale-105 transition-all flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transform hover:scale-105 transition-all flex items-center justify-center">
                Watch Demo
                <span className="ml-2 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:bg-blue-700">▶</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">24/7</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Always Available</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold">50+</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Languages</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Main icon with floating elements */}
              <div className="relative">
                <Bot className="w-64 h-64 mx-auto text-blue-600 transform hover:scale-105 transition-transform duration-300" />
                
                {/* Floating elements */}
                <div className="absolute top-0 right-0 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform -translate-y-1/2 animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">AI Active</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform translate-y-1/2 animate-float-delayed">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">Processing...</span>
                  </div>
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