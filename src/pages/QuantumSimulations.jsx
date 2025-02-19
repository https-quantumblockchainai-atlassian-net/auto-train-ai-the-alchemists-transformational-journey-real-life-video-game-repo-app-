import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";
import { motion } from 'framer-motion';

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8"
    >
      <h1 className="text-4xl font-bold mb-6">Simulate Multiversal Particle Interactions</h1>
      <p className="text-xl mb-8">Create mystical simulations of quantum particle behavior across interconnected dimensions for arcane gameplay and cosmic enlightenment.</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ethereal Simulation Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Accurate modeling of quantum phenomena across multiple realities</li>
          <li>Mesmerizing visualizations of interdimensional particle behavior</li>
          <li>Customizable parameters for various quantum scenarios and cosmic events</li>
          <li>Real-time manipulation of quantum states and dimensional rifts</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Arcane Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Mystical educational tools for quantum physics concepts</li>
          <li>Mind-bending puzzle mechanics based on multiversal principles</li>
          <li>Realistic quantum computing simulations for interdimensional calculations</li>
          <li>Awe-inspiring artistic visualizations of cosmic quantum phenomena</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AI-Assisted Arcane Development</h2>
        <p className="mb-4">Our mystical AI assists in:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Optimizing simulation performance for real-time interdimensional interactions</li>
          <li>Generating complex quantum scenarios across multiple realities</li>
          <li>Creating intuitive interfaces for controlling multiversal simulations</li>
          <li>Analyzing simulation results for integration into cosmic gameplay</li>
        </ul>
      </section>

      <div className="space-y-4">
        <Button 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full text-lg"
          onClick={startSimulation}
          disabled={isSimulating}
        >
          {isSimulating ? 'Weaving Quantum Threads...' : 'Initiate Cosmic Simulation'}
        </Button>
        {isSimulating && (
          <div className="w-full">
            <Progress value={simulationProgress} className="w-full" />
            <p className="text-center mt-2">{simulationProgress}% Reality Stabilized</p>
          </div>
        )}
        <Link to="/get-started">
          <Button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full text-lg">
            Return to the Cosmic Nexus
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default QuantumSimulations;