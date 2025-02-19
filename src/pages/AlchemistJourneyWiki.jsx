import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AlchemistJourneyWiki = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">The Alchemist's Transformation Journey Wiki</h1>
      <p className="text-xl mb-8">Explore the lore and mechanics of the Alchemist's multi-dimensional adventures.</p>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>The Crystal Alchemist</CardTitle>
        </CardHeader>
        <CardContent>
          <p>A female heyoka Empath Healer with the power to transmute reality across dimensions.</p>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Multi-Dimensional Realms</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>The Ethereal Plane</li>
            <li>Quantum Nexus</li>
            <li>Arcane Forge</li>
            <li>Empathic Void</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Alchemical Transmutations</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Learn about the various alchemical processes that can transform both matter and spirit across realities.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlchemistJourneyWiki;