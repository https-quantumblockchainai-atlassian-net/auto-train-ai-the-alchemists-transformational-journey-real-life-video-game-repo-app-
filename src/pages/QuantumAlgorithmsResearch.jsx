import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const QuantumAlgorithmsResearch = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Quantum Algorithms Research</h1>
      <p className="text-xl mb-8">Explore cutting-edge quantum algorithms and their applications in game development.</p>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Key Quantum Algorithms</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Shor's Algorithm: For quantum factoring and cryptography</li>
            <li>Grover's Algorithm: For quantum search and optimization</li>
            <li>Quantum Fourier Transform: For quantum signal processing</li>
            <li>VQE (Variational Quantum Eigensolver): For quantum chemistry simulations</li>
            <li>QAOA (Quantum Approximate Optimization Algorithm): For combinatorial optimization</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Applications in Game Development</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Procedural content generation using quantum randomness</li>
            <li>AI decision-making based on quantum superposition</li>
            <li>Quantum-inspired pathfinding and navigation systems</li>
            <li>Cryptographic systems for secure multiplayer interactions</li>
            <li>Quantum-based physics simulations for realistic game worlds</li>
          </ul>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Link to="/sdk/quantum-algorithms">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Explore Quantum Algorithms SDK</Button>
        </Link>
        <Link to="/tutorials/quantum-game-dev">
          <Button className="w-full bg-green-600 hover:bg-green-700">Quantum Game Development Tutorial</Button>
        </Link>
      </div>
    </div>
  );
};

export default QuantumAlgorithmsResearch;