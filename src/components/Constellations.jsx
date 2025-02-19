import React from 'react';

const Constellations = () => {
  const constellationData = [
    { name: "Orion", stars: 7 },
    { name: "Ursa Major", stars: 7 },
    { name: "Cassiopeia", stars: 5 },
    { name: "Scorpius", stars: 18 },
    { name: "Cygnus", stars: 9 },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Constellations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {constellationData.map((constellation, index) => (
          <div key={index} className="bg-purple-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{constellation.name}</h3>
            <p>Number of stars: {constellation.stars}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Constellations;