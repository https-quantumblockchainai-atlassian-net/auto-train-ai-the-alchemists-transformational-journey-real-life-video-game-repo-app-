import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const Demo = () => {
  const [demoStarted, setDemoStarted] = useState(false);

  const startDemo = () => {
    setDemoStarted(true);
    toast.success('Demo started! Explore the quantum features below.');
  };

  const demoFeatures = [
    {
      title: "Quantum Puzzle Creator",
      description: "Create mind-bending puzzles using quantum mechanics",
      link: "/features/quantum-puzzles"
    },
    {
      title: "Procedural Environment Generator",
      description: "Generate vast quantum realms and environments",
      link: "/generate-environment"
    },
    {
      title: "Adaptive Difficulty System",
      description: "Experience AI-powered difficulty balancing",
      link: "/features/difficulty-balancing"
    },
    {
      title: "AI Character Interaction",
      description: "Interact with quantum-powered AI characters",
      link: "/features/ai-storylines"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white"
    >
      <h1 className="text-4xl font-bold mb-6">Quantum Realm Builder Demo</h1>
      <p className="text-xl mb-8">Experience the power of quantum game development with our interactive demo.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {demoFeatures.map((feature, index) => (
          <Card key={index} className="bg-purple-800 hover:bg-purple-700 transition-colors">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{feature.description}</p>
              <Link to={feature.link}>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-500">
                  Try {feature.title}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="mb-8 bg-purple-800">
        <CardContent className="p-6">
          <Button 
            onClick={startDemo} 
            className="w-full bg-green-600 hover:bg-green-500 mb-4"
            disabled={demoStarted}
          >
            {demoStarted ? 'Demo Active' : 'Start Interactive Demo'}
          </Button>
          <p className="text-sm text-gray-300">
            Note: This is a limited demo. For full access to all features, please sign up for an account.
          </p>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <Link to="/sign-up">
          <Button className="w-full bg-blue-600 hover:bg-blue-500">
            Sign Up for Full Access
          </Button>
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/api/documentation">
            <Button variant="outline" className="w-full">
              API Documentation
            </Button>
          </Link>
          <Link to="/sdk/quantum-physics">
            <Button variant="outline" className="w-full">
              Quantum SDK
            </Button>
          </Link>
          <Link to="/wiki/quantum-game-dev">
            <Button variant="outline" className="w-full">
              Developer Wiki
            </Button>
          </Link>
        </div>
        
        <Link to="/">
          <Button variant="outline" className="w-full">
            Back to Home
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Demo;