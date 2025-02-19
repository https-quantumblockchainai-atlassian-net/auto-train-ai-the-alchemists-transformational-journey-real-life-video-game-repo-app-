import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";

const QuantumSimulations = () => {
  const [simulationProgress, setSimulationProgress] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const startSimulation = () => {
    setIsSimulating(true);
    setSimulationProgress(0);
    const interval = setInterval(() => {
      setSimulationProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Simulate Quantum Particle Interactions</h1>
      <p className="text-xl mb-8">Create realistic simulations of quantum particle behavior for educational or gameplay purposes.</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Simulation Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Accurate modeling of quantum phenomena</li>
          <li>Visualizations of particle behavior and interactions</li>
          <li>Customizable parameters for different quantum scenarios</li>
          <li>Real-time manipulation of quantum states</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Educational tools for quantum physics concepts</li>
          <li>Puzzle mechanics based on quantum principles</li>
          <li>Realistic quantum computing simulations</li>
          <li>Artistic visualizations of quantum phenomena</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AI-Assisted Development</h2>
        <p className="mb-4">Our AI helps in:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Optimizing simulation performance for real-time interactions</li>
          <li>Generating complex quantum scenarios</li>
          <li>Creating intuitive user interfaces for controlling simulations</li>
          <li>Analyzing simulation results for gameplay integration</li>
        </ul>
      </section>

      <div className="space-y-4">
        <Button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg"
          onClick={startSimulation}
          disabled={isSimulating}
        >
          {isSimulating ? 'Simulating...' : 'Start Simulation'}
        </Button>
        {isSimulating && (
          <div className="w-full">
            <Progress value={simulationProgress} className="w-full" />
            <p className="text-center mt-2">{simulationProgress}% Complete</p>
          </div>
        )}
        <Link to="/get-started">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            Back to AI Features
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuantumSimulations;
