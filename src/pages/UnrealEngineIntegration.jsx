import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const UnrealEngineIntegration = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Unreal Engine 5.5 Integration</h1>
      <p className="text-xl mb-8">Harness the power of Unreal Engine 5.5 for your quantum realm simulations.</p>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Nanite virtualized geometry</li>
            <li>Lumen global illumination and reflections</li>
            <li>World Partition system</li>
            <li>Niagara VFX improvements</li>
            <li>Enhanced Audio Engine</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Integration Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Download and install Unreal Engine 5.5</li>
            <li>Set up your Quantum Realm project in UE5.5</li>
            <li>Import your quantum assets and blueprints</li>
            <li>Configure Nanite and Lumen for your scenes</li>
            <li>Optimize performance using World Partition</li>
          </ol>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
          <a href="https://www.unrealengine.com/en-US/unreal-engine-5" target="_blank" rel="noopener noreferrer">Download Unreal Engine 5.5</a>
        </Button>
        <Link to="/tutorials/unreal-engine-setup">
          <Button className="w-full bg-green-600 hover:bg-green-700">Unreal Engine Setup Tutorial</Button>
        </Link>
      </div>
    </div>
  );
};

export default UnrealEngineIntegration;