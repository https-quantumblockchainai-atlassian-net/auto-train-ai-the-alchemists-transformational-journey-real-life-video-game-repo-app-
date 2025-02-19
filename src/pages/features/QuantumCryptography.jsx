import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const QuantumCryptography = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Quantum Cryptography in Gaming</h1>
      <p className="text-xl mb-8">Explore the cutting-edge security features powered by quantum cryptography.</p>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Quantum key distribution for unbreakable communication</li>
            <li>Entanglement-based secure multiplayer interactions</li>
            <li>Quantum random number generation for enhanced unpredictability</li>
            <li>Post-quantum cryptographic algorithms for future-proof security</li>
          </ul>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <Link to="/sdk/quantum-cryptography">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Explore Quantum Cryptography SDK</Button>
        </Link>
        <Link to="/features">
          <Button className="w-full bg-green-600 hover:bg-green-700">Back to Features</Button>
        </Link>
      </div>
    </div>
  );
};

export default QuantumCryptography;