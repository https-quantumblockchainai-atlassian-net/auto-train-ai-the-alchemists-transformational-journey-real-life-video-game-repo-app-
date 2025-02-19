import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const QuantumPhysicsMechanics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Suggest Quantum Physics-Based Gameplay Mechanics</h1>
      <p className="text-xl mb-8">Implement mechanics inspired by quantum phenomena like superposition and entanglement.</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Quantum Concepts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Superposition: Objects existing in multiple states simultaneously</li>
          <li>Entanglement: Particles remaining connected regardless of distance</li>
          <li>Quantum Tunneling: Objects passing through seemingly impenetrable barriers</li>
          <li>Wave-Particle Duality: Matter exhibiting properties of both waves and particles</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Gameplay Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Multi-state characters with different abilities in each state</li>
          <li>Puzzle-solving using entangled objects</li>
          <li>Exploration mechanics based on quantum tunneling</li>
          <li>Combat systems utilizing wave-particle duality</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AI-Assisted Design</h2>
        <p className="mb-4">Our AI system helps you:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Generate unique gameplay mechanics based on quantum principles</li>
          <li>Balance and refine quantum-inspired game systems</li>
          <li>Create engaging tutorials to introduce players to complex concepts</li>
          <li>Develop storylines that integrate quantum phenomena seamlessly</li>
        </ul>
      </section>

      <div className="space-y-4">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg">
          Generate Mechanics
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

export default QuantumPhysicsMechanics;
