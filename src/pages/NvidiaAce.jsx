import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const NvidiaAce = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">NVIDIA ACE Integration</h1>
      <p className="text-xl mb-8">Enhance your quantum realm with NVIDIA's Avatar Cloud Engine (ACE) for lifelike AI-driven characters.</p>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>ACE Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>AI-powered character animations</li>
            <li>Real-time ray tracing for realistic lighting</li>
            <li>DLSS for enhanced performance</li>
            <li>Natural language processing for dynamic conversations</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Integration Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Sign up for NVIDIA ACE developer access</li>
            <li>Download the ACE SDK</li>
            <li>Configure ACE in your Unreal Engine project</li>
            <li>Create AI-driven characters using ACE tools</li>
            <li>Implement dynamic conversations and behaviors</li>
          </ol>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
          <a href="https://www.nvidia.com/en-us/omniverse/avatar-cloud-engine/" target="_blank" rel="noopener noreferrer">NVIDIA ACE Developer Portal</a>
        </Button>
        <Link to="/tutorials/nvidia-ace-setup">
          <Button className="w-full bg-green-600 hover:bg-green-700">NVIDIA ACE Setup Tutorial</Button>
        </Link>
      </div>
    </div>
  );
};

export default NvidiaAce;