import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConfigurationGuide = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Configuration Guide</h1>
      <p className="text-xl mb-8">Learn how to configure your quantum realm for optimal performance and immersion.</p>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Quantum Physics Engine Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Configure the underlying quantum physics simulation parameters:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Planck constant value</li>
            <li>Quantum decoherence rate</li>
            <li>Entanglement strength factor</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Multi-Dimensional Rendering Options</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Adjust settings for rendering multiple dimensions:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Number of simultaneous dimensions</li>
            <li>Inter-dimensional transition effects</li>
            <li>Quantum fog density</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>AI and Procedural Generation Parameters</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Fine-tune AI behavior and world generation:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Quantum AI decision-making frequency</li>
            <li>Procedural quantum landscape complexity</li>
            <li>Dynamic difficulty adjustment sensitivity</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfigurationGuide;