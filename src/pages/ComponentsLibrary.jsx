import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const ComponentsLibrary = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Components Library</h1>
      <p className="text-xl mb-8">Discover the building blocks of your quantum game universe.</p>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Quantum Particle Emitter</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Creates visually stunning quantum particle effects.</p>
          <Link to="/components/quantum-particle-emitter" className="text-blue-400 hover:underline">View component</Link>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Entanglement Visualizer</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Displays quantum entanglement between game objects.</p>
          <Link to="/components/entanglement-visualizer" className="text-blue-400 hover:underline">View component</Link>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Quantum Inventory System</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Manages items that exist in multiple quantum states simultaneously.</p>
          <Link to="/components/quantum-inventory" className="text-blue-400 hover:underline">View component</Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComponentsLibrary;