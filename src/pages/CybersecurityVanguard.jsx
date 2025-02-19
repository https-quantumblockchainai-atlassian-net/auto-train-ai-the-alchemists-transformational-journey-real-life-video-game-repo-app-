import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CybersecurityVanguard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Cybersecurity Vanguard</h1>
      <p className="text-xl mb-8">Enhance your game's security with cutting-edge Cybersecurity Vanguard technology.</p>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cybersecurity Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Quantum-resistant encryption</li>
            <li>Real-time threat detection and mitigation</li>
            <li>Secure multiplayer communication</li>
            <li>Anti-cheat measures for fair gameplay</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CybersecurityVanguard;