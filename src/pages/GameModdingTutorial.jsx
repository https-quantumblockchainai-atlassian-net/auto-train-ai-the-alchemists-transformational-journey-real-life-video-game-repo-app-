import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GameModdingTutorial = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Game Modding Tutorial</h1>
      <p className="text-xl mb-8">Learn how to create and integrate mods for quantum-based games.</p>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Setting up your modding environment</li>
            <li>Understanding the game's quantum framework</li>
            <li>Creating your first quantum mod</li>
            <li>Testing and debugging quantum mods</li>
          </ol>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Advanced Modding Techniques</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Modifying quantum game mechanics</li>
            <li>Creating custom quantum entities</li>
            <li>Implementing new quantum algorithms</li>
            <li>Optimizing mods for quantum performance</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Community Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Join our <a href="/forum/quantum-modding" className="text-blue-500 hover:underline">Quantum Modding Forum</a> to connect with other modders and share your creations!</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameModdingTutorial;