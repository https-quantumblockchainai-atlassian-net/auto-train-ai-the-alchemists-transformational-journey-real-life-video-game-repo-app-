import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const QuantumSuperposition = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Quantum Superposition in Game Mechanics</h1>
      <p className="text-xl mb-8">Explore how quantum superposition can be applied to create unique gameplay experiences.</p>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Understanding Superposition</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Quantum superposition is a fundamental principle of quantum mechanics where a quantum system can exist in multiple states simultaneously until observed or measured.</p>
        </CardContent>
      </Card>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Applications in Game Design</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-state characters with different abilities</li>
            <li>Puzzle elements that exist in multiple states</li>
            <li>Storylines that branch based on quantum observations</li>
            <li>Combat systems with probabilistic outcomes</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Implementation Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Here's a simple example of how to implement a superposition state in JavaScript:</p>
          <pre className="bg-gray-900 p-4 rounded-md mt-2">
{`const quantumState = {
  state: null,
  possibleStates: ['A', 'B', 'C'],
  observe() {
    this.state = this.possibleStates[Math.floor(Math.random() * this.possibleStates.length)];
    return this.state;
  }
};

console.log(quantumState.observe()); // Randomly outputs 'A', 'B', or 'C'`}
          </pre>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Link to="/sdk/quantum-physics">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Explore Quantum Physics SDK</Button>
        </Link>
        <Link to="/wiki/quantum-game-dev">
          <Button className="w-full bg-green-600 hover:bg-green-700">Back to Quantum Game Dev Wiki</Button>
        </Link>
      </div>
    </div>
  );
};

export default QuantumSuperposition;