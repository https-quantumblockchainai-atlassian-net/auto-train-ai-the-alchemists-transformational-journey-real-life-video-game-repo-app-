import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const QuantumPuzzles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Design Quantum-Inspired Puzzles</h1>
      <p className="text-xl mb-8">Generate mind-bending puzzles based on quantum principles for engaging gameplay.</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Puzzle Types</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Superposition puzzles: Solve problems in multiple states simultaneously</li>
          <li>Entanglement challenges: Link objects across space and time</li>
          <li>Quantum tunneling mazes: Navigate through seemingly impossible barriers</li>
          <li>Wave-particle duality riddles: Switch between wave and particle properties</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AI-Powered Design</h2>
        <p className="mb-4">Our AI assists in:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Generating unique puzzle concepts based on quantum principles</li>
          <li>Balancing puzzle difficulty for optimal player engagement</li>
          <li>Creating visually stunning representations of quantum phenomena</li>
          <li>Developing adaptive hint systems for player assistance</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Educational Value</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Introduce players to complex quantum concepts through gameplay</li>
          <li>Provide intuitive visualizations of abstract quantum principles</li>
          <li>Encourage critical thinking and problem-solving skills</li>
          <li>Offer progressive learning experiences for various skill levels</li>
        </ul>
      </section>

      <div className="space-y-4">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg">
          Generate Puzzle
        </Button>
        <Link to="/get-started">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            Back to AI Features
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuantumPuzzles;