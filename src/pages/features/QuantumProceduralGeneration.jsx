import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const QuantumProceduralGeneration = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Quantum Procedural Generation</h1>
      <p className="text-xl mb-8">Harness the power of quantum algorithms for advanced procedural content generation.</p>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Quantum-inspired terrain generation</li>
            <li>Superposition-based object placement</li>
            <li>Entanglement-driven ecosystem simulation</li>
            <li>Quantum random number generation for enhanced unpredictability</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Implementation Example</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-900 p-4 rounded-md mt-2">
{`import { QuantumCircuit } from 'quantum-sdk';

const generateQuantumTerrain = (width, height) => {
  const circuit = new QuantumCircuit(width * height);
  circuit.hadamardAll();
  circuit.measure();
  
  const result = circuit.run();
  return result.map(bit => bit ? 'mountain' : 'valley');
};

const terrain = generateQuantumTerrain(10, 10);
console.log(terrain);`}
          </pre>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Link to="/sdk/quantum-physics">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Explore Quantum Physics SDK</Button>
        </Link>
        <Link to="/features">
          <Button className="w-full bg-green-600 hover:bg-green-700">Back to Features</Button>
        </Link>
      </div>
    </div>
  );
};

export default QuantumProceduralGeneration;