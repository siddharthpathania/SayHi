import React from 'react';
import { Lightbulb, Zap, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "0.3s", label: "Avg. Response Time" },
    { value: "50+", label: "Languages" },
    { value: "1M+", label: "Queries/Day" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
            <Lightbulb className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Innovative Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Leveraging cutting-edge AI technology to revolutionize customer support experiences.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
            <Zap className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">24/7 Availability</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Round-the-clock support ensuring your customers are never left waiting.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
            <TrendingUp className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI system evolves and improves with every interaction, providing better support over time.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;