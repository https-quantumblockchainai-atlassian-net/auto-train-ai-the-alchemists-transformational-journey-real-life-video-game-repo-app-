import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const QuantumDebugger = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Quantum Debugger</h1>
      <p className="text-xl mb-8">Debug quantum states and entanglements in your game.</p>

      <Card className="bg-purple-800/50 mb-6">
        <CardHeader>
          <CardTitle>State Inspector</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Visualize and debug quantum states in real-time.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuantumDebugger;