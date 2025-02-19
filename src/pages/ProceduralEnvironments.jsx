import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ProceduralEnvironments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Create Procedural Multidimensional Environments</h1>
      <p className="text-xl mb-8">Generate complex, interconnected game worlds across multiple dimensions.</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Infinite world generation using advanced algorithms</li>
          <li>Seamless transitions between different dimensions</li>
          <li>Dynamic ecosystem simulations</li>
          <li>Customizable biomes and environmental parameters</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AI-Powered Generation</h2>
        <p className="mb-4">Our AI assists in:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Creating coherent and diverse landscapes</li>
          <li>Designing intricate cave systems and underground structures</li>
          <li>Populating worlds with flora and fauna</li>
          <li>Generating unique landmarks and points of interest</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Multidimensional Aspects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Parallel universes with subtle or dramatic differences</li>
          <li>Time-shifting environments that change based on player actions</li>
          <li>Quantum realms with unique physical properties</li>
          <li>Interconnected dimensions that affect each other</li>
        </ul>
      </section>

      <div className="space-y-4">
        <Link to="/generate-environment">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            Generate Environment
          </Button>
        </Link>
        <Link to="/environment-gallery">
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            View Generated Environments
          </Button>
        </Link>
        <Link to="/get-started">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            Back to AI Features
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProceduralEnvironments;
