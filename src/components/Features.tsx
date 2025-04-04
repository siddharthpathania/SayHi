import React from 'react';
import { Brain, Zap, Clock, Shield, MessageSquare, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced NLP",
      description: "Natural Language Processing powered by state-of-the-art machine learning models for human-like understanding."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Responses",
      description: "Lightning-fast response times with an average of 0.3 seconds per query."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Round-the-clock support ensuring your customers are never left waiting."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with GDPR, HIPAA, and SOC2 compliance."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Multi-language Support",
      description: "Support for 50+ languages with real-time translation capabilities."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and insights to track and improve customer satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Cutting-edge technology for exceptional customer support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;