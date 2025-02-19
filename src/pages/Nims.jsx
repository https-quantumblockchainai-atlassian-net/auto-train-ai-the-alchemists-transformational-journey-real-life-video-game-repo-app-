import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Nims = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">NIMS Documentation</h1>
      <p className="text-xl mb-8">Explore the Neural Interactive Motion Synthesis (NIMS) system for advanced character animations in your quantum realm.</p>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>NIMS Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>AI-driven motion synthesis</li>
            <li>Real-time character animation adaptation</li>
            <li>Seamless integration with existing animation systems</li>
            <li>Physics-based motion generation</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Implementation Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Set up NIMS in your development environment</li>
            <li>Prepare character rigs for NIMS integration</li>
            <li>Train NIMS models with your character animations</li>
            <li>Implement NIMS-driven animations in your game logic</li>
            <li>Fine-tune and optimize NIMS performance</li>
          </ol>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
          <a href="#" target="_blank" rel="noopener noreferrer">NIMS Documentation (Coming Soon)</a>
        </Button>
        <Link to="/tutorials/nims-integration">
          <Button className="w-full bg-green-600 hover:bg-green-700">NIMS Integration Tutorial</Button>
        </Link>
      </div>
    </div>
  );
};

export default Nims;