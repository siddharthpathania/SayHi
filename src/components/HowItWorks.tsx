import React from 'react';
import { Brain, MessageSquare, BarChart3, Zap, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "AI Processing",
      description: "Our advanced NLP engine processes and understands customer queries with human-like comprehension",
      details: ["Context understanding", "Intent recognition", "Sentiment analysis"]
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-500" />,
      title: "Smart Response",
      description: "Generate accurate, contextual responses tailored to each customer's needs",
      details: ["Personalized replies", "Multi-language support", "Real-time adaptation"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
      title: "Learning & Analytics",
      description: "Continuous improvement through machine learning and detailed analytics",
      details: ["Performance tracking", "Insight generation", "Pattern recognition"]
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "Instant Resolution",
      description: "Quick and effective problem resolution with minimal wait times",
      details: ["Fast response time", "High accuracy", "Customer satisfaction"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">How It Works</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our AI-powered platform streamlines customer support through an intelligent, automated process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl"></div>
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transform hover:scale-105 transition-all">
            Learn More About Our Technology
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;