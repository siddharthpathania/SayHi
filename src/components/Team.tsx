import React from 'react';

const Team = () => {
  const team = [
    {
      name: "Siddharth",
      role: "Frontend Engineer",
      image: "/siddharth.png"
    },
    {
      name: "Simar Ahluwalia",
      role: "Backend Engineer",
      image: "/simar.jpeg"
    },
    {
      name: "Anmol",
      role: "Social Media Manager",
      image: "/anmol.jpeg"
    },
    {
      name: "Riya Singh",
      role: "Flutter Engineer",
      image: "/riya.png" // Make sure you have this image in your `public` folder
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-300">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
