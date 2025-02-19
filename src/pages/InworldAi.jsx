import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const InworldAi = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Inworld.ai Integration</h1>
      <p className="text-xl mb-8">Create intelligent and interactive AI characters for your quantum realm using Inworld.ai technology.</p>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Inworld.ai Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Advanced natural language processing</li>
            <li>Emotional intelligence and personality modeling</li>
            <li>Dynamic memory and learning capabilities</li>
            <li>Multi-modal interaction (text, voice, gestures)</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Integration Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Sign up for an Inworld.ai developer account</li>
            <li>Create AI characters using the Inworld Studio</li>
            <li>Integrate the Inworld SDK into your game project</li>
            <li>Implement character interactions and dialogues</li>
            <li>Test and refine AI behaviors</li>
          </ol>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
          <a href="https://www.inworld.ai/developers" target="_blank" rel="noopener noreferrer">Inworld.ai Developer Portal</a>
        </Button>
        <Link to="/tutorials/inworld-ai-setup">
          <Button className="w-full bg-green-600 hover:bg-green-700">Inworld.ai Setup Tutorial</Button>
        </Link>
      </div>
    </div>
  );
};

export default InworldAi;