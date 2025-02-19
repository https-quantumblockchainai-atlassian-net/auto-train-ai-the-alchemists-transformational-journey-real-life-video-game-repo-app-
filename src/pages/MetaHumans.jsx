import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const MetaHumans = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">MetaHumans Creation</h1>
      <p className="text-xl mb-8">Design and integrate hyper-realistic characters into your quantum realm using Epic Games' MetaHuman Creator.</p>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>MetaHuman Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Photorealistic character creation</li>
            <li>Extensive customization options</li>
            <li>High-fidelity facial animations</li>
            <li>Seamless integration with Unreal Engine</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Creation Process</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Access the MetaHuman Creator via Epic Games</li>
            <li>Design your character using the web-based tool</li>
            <li>Export the MetaHuman to your Unreal Engine project</li>
            <li>Customize animations and behaviors</li>
            <li>Integrate the MetaHuman into your quantum realm scenes</li>
          </ol>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
          <a href="https://www.unrealengine.com/en-US/metahuman" target="_blank" rel="noopener noreferrer">MetaHuman Creator</a>
        </Button>
        <Link to="/tutorials/metahuman-integration">
          <Button className="w-full bg-green-600 hover:bg-green-700">MetaHuman Integration Tutorial</Button>
        </Link>
      </div>
    </div>
  );
};

export default MetaHumans;