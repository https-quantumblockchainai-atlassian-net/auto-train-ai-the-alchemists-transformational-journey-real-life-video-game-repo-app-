import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Eye, Download } from 'lucide-react';

const EnvironmentGallery = () => {
  const generatedEnvironments = [
    { id: 1, title: "Quantum Forest", complexity: "High", thumbnail: "/placeholder.svg" },
    { id: 2, title: "Multidimensional Desert", complexity: "Extreme", thumbnail: "/placeholder.svg" },
    { id: 3, title: "Tundra Simulation", complexity: "Medium", thumbnail: "/placeholder.svg" },
  ];

  const handlePreview = (environmentId) => {
    console.log(`Previewing environment ${environmentId}`);
  };

  const handleDownload = (environmentId) => {
    console.log(`Downloading environment ${environmentId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Generated Environments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {generatedEnvironments.map((environment) => (
          <div key={environment.id} className="bg-purple-800 rounded-lg overflow-hidden">
            <img src={environment.thumbnail} alt={environment.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{environment.title}</h3>
              <p className="text-sm mb-4">Complexity: {environment.complexity}</p>
              <div className="flex space-x-2">
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 flex items-center"
                  onClick={() => handlePreview(environment.id)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
                <Button 
                  className="bg-green-500 hover:bg-green-600 flex items-center"
                  onClick={() => handleDownload(environment.id)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/generate-environment">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full text-lg">
            Generate More Environments
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EnvironmentGallery;