import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CinematicExperiences = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white"
    >
      <h1 className="text-4xl font-bold mb-6">Epic Quantum Cinematic Experiences</h1>
      <p className="text-xl mb-8">Create breathtaking, movie-quality scenes and cutscenes for your quantum realm adventures.</p>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Advanced Cinematic Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Unreal Engine's Sequencer with Quantum Extensions</li>
            <li>NVIDIA Omniverse Integration for Quantum Visuals</li>
            <li>Quantum-enhanced post-processing effects</li>
            <li>Multi-dimensional motion capture integration</li>
            <li>AI-driven dynamic camera systems</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Quantum Cinematic Creation Process</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Conceptualize your quantum narrative and storyboard</li>
            <li>Set up multi-dimensional scenes in Unreal Engine</li>
            <li>Utilize Quantum Sequencer for complex animations and timelines</li>
            <li>Apply quantum-inspired lighting and particle effects</li>
            <li>Implement AI-driven camera movements for dynamic shots</li>
            <li>Render using quantum-accelerated GPU technology</li>
            <li>Integrate seamlessly into your quantum game environment</li>
          </ol>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Quantum Cinematic Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-dimensional scene transitions</li>
            <li>Quantum particle-based visual effects</li>
            <li>Time dilation and relativity simulations</li>
            <li>Entanglement-driven character interactions</li>
            <li>Procedurally generated quantum landscapes</li>
          </ul>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-500">
          <a href="https://docs.unrealengine.com/5.0/en-US/sequencer-overview-for-unreal-engine/" target="_blank" rel="noopener noreferrer">Unreal Engine Quantum Sequencer Documentation</a>
        </Button>
        <Link to="/tutorials/quantum-cinematic-creation">
          <Button className="w-full bg-green-600 hover:bg-green-500">Quantum Cinematic Creation Tutorial</Button>
        </Link>
        <Link to="/generate-video">
          <Button className="w-full bg-purple-600 hover:bg-purple-500">Generate Epic Quantum Video</Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CinematicExperiences;