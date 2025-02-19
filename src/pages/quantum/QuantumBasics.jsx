import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const QuantumBasics = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Quantum Basics</h1>
      <p className="text-xl mb-8">Master the fundamental concepts of quantum mechanics in game development.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-purple-800/50">
          <CardHeader>
            <CardTitle>Quantum Superposition</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn how to implement quantum superposition states in your game objects.</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-800/50">
          <CardHeader>
            <CardTitle>Quantum Entanglement</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover the principles of quantum entanglement for multiplayer mechanics.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuantumBasics;