import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const QuantumGameDevWiki = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Quantum Game Development Wiki</h1>
      <p className="text-xl mb-8">Explore the comprehensive guide to quantum game development concepts and techniques.</p>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Key Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/wiki/quantum-superposition" className="text-blue-300 hover:underline">Quantum Superposition in Game Mechanics</Link></li>
            <li><Link to="/wiki/entanglement-multiplayer" className="text-blue-300 hover:underline">Entanglement-based Multiplayer Interactions</Link></li>
            <li><Link to="/wiki/quantum-procedural-generation" className="text-blue-300 hover:underline">Quantum Algorithms for Procedural Generation</Link></li>
            <li><Link to="/wiki/quantum-ai-behaviors" className="text-blue-300 hover:underline">Quantum-inspired AI Behaviors</Link></li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Advanced Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/wiki/quantum-cryptography" className="text-blue-300 hover:underline">Quantum Cryptography for Secure Multiplayer</Link></li>
            <li><Link to="/wiki/quantum-ml-game-design" className="text-blue-300 hover:underline">Quantum Machine Learning in Game Design</Link></li>
            <li><Link to="/wiki/quantum-physics-simulation" className="text-blue-300 hover:underline">Simulating Quantum Physics in Game Engines</Link></li>
            <li><Link to="/wiki/quantum-randomness" className="text-blue-300 hover:underline">Quantum-based Randomness in Game Events</Link></li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Practical Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/sdk/quantum-physics" className="text-blue-300 hover:underline">Quantum Physics SDK</Link></li>
            <li><Link to="/tutorials/game-modding" className="text-blue-300 hover:underline">Quantum Game Modding Tutorial</Link></li>
            <li><Link to="/api/documentation" className="text-blue-300 hover:underline">Quantum Game Development API</Link></li>
            <li><Link to="/mods/community" className="text-blue-300 hover:underline">Community Quantum Game Mods</Link></li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Community and Support</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/forum" className="text-blue-300 hover:underline">Quantum Game Developers Forum</Link></li>
            <li><Link to="/tutorials" className="text-blue-300 hover:underline">Video Tutorials</Link></li>
            <li><a href="https://discord.gg/quantumgamedev" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">Join our Discord Community</a></li>
          </ul>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Link to="/features/quantum-physics-mechanics">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Explore Quantum Physics Mechanics</Button>
        </Link>
        <Link to="/research-dashboard">
          <Button className="w-full bg-green-600 hover:bg-green-700">Access Research Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default QuantumGameDevWiki;