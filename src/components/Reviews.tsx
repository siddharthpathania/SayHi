import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "John Smith",
      company: "Tech Solutions Inc.",
      content: "The AI customer support has transformed our business. Response times have decreased by 80% and customer satisfaction is at an all-time high.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "E-commerce Plus",
      content: "Incredible technology that keeps getting better. Our customers love the instant responses and accurate solutions.",
      rating: 5
    },
    {
      name: "Mark Johnson",
      company: "Digital Services Co.",
      content: "The implementation was smooth and the results were immediate. Best investment we've made in customer service.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Client Stories</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{review.content}</p>
              <div className="border-t pt-4">
                <h4 className="font-bold">{review.name}</h4>
                <p className="text-blue-600">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;