import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CinematicExperiences = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Realistic Cinematic Experiences</h1>
      <p className="text-xl mb-8">Create breathtaking, movie-quality scenes and cutscenes for your quantum realm adventures.</p>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Cinematic Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Unreal Engine's Sequencer</li>
            <li>NVIDIA Omniverse</li>
            <li>Advanced post-processing effects</li>
            <li>Motion capture integration</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Creation Process</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Storyboard your cinematic sequence</li>
            <li>Set up your scene in Unreal Engine</li>
            <li>Use Sequencer to animate characters and camera</li>
            <li>Apply advanced lighting and post-processing</li>
            <li>Render and integrate into your game</li>
          </ol>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
          <a href="https://docs.unrealengine.com/5.0/en-US/sequencer-overview-for-unreal-engine/" target="_blank" rel="noopener noreferrer">Unreal Engine Sequencer Documentation</a>
        </Button>
        <Link to="/tutorials/cinematic-creation">
          <Button className="w-full bg-green-600 hover:bg-green-700">Cinematic Creation Tutorial</Button>
        </Link>
      </div>
    </div>
  );
};

export default CinematicExperiences;