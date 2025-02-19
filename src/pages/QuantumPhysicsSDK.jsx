import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const QuantumPhysicsSDK = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Quantum Physics SDK</h1>
      <p className="text-xl mb-8">Integrate quantum physics simulations and algorithms into your game development process.</p>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-100 p-2 rounded">
            npm install quantum-physics-sdk
          </pre>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Quantum State Simulation</li>
            <li>Entanglement and Superposition Utilities</li>
            <li>Quantum Random Number Generation</li>
            <li>Quantum Algorithm Library</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Documentation</CardTitle>
        </CardHeader>
        <CardContent>
          <p>For detailed API documentation and usage examples, visit our <a href="/docs/quantum-physics-sdk" className="text-blue-500 hover:underline">online documentation</a>.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuantumPhysicsSDK;