import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const BlueprintsDocumentation = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Blueprints Documentation</h1>
      <p className="text-xl mb-8">Explore the quantum blueprints that power your multi-dimensional game worlds.</p>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Quantum State Blueprint</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Manages the superposition and entanglement of game objects.</p>
          <Link to="/blueprints/quantum-state" className="text-blue-400 hover:underline">Learn more</Link>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Multi-Dimensional Level Blueprint</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Creates interconnected game levels across multiple dimensions.</p>
          <Link to="/blueprints/multi-dimensional-level" className="text-blue-400 hover:underline">Learn more</Link>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Quantum AI Character Blueprint</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Implements AI-driven characters with quantum decision-making capabilities.</p>
          <Link to="/blueprints/quantum-ai-character" className="text-blue-400 hover:underline">Learn more</Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlueprintsDocumentation;