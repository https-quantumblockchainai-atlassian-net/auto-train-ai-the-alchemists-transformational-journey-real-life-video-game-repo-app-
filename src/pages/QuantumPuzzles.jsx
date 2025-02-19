import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const fetchPuzzleData = async () => {
  // In a real scenario, this would be an API call
  return new Promise((resolve) => setTimeout(() => resolve({
    puzzleTypes: [
      { name: "Superposition Puzzle", description: "Solve problems in multiple states simultaneously" },
      { name: "Entanglement Challenge", description: "Link objects across space and time" },
      { name: "Quantum Tunneling Maze", description: "Navigate through seemingly impossible barriers" },
      { name: "Wave-Particle Duality Riddle", description: "Switch between wave and particle properties" }
    ]
  }), 1000));
};

const QuantumPuzzles = () => {
  const [generatedPuzzle, setGeneratedPuzzle] = useState(null);
  const { data: puzzleData, isLoading, error } = useQuery({
    queryKey: ['puzzleData'],
    queryFn: fetchPuzzleData,
  });

  const generatePuzzle = () => {
    // This would typically involve an API call to a backend service
    setGeneratedPuzzle({
      type: puzzleData.puzzleTypes[Math.floor(Math.random() * puzzleData.puzzleTypes.length)].name,
      difficulty: Math.floor(Math.random() * 5) + 1
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8"
    >
      <h1 className="text-4xl font-bold mb-6">Design Quantum-Inspired Puzzles</h1>
      <p className="text-xl mb-8">Generate mind-bending puzzles based on quantum principles for engaging gameplay.</p>
      
      {isLoading ? (
        <Loader2 className="h-8 w-8 animate-spin" />
      ) : error ? (
        <p>Error loading puzzle data. Please try again.</p>
      ) : (
        <>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Puzzle Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {puzzleData.puzzleTypes.map((type, index) => (
                <Card key={index} className="bg-purple-800">
                  <CardHeader>
                    <CardTitle>{type.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">AI-Powered Design</h2>
            <Card className="bg-purple-800">
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Generating unique puzzle concepts based on quantum principles</li>
                  <li>Balancing puzzle difficulty for optimal player engagement</li>
                  <li>Creating visually stunning representations of quantum phenomena</li>
                  <li>Developing adaptive hint systems for player assistance</li>
                </ul>
              </CardContent>
            </Card>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Educational Value</h2>
            <Card className="bg-purple-800">
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Introduce players to complex quantum concepts through gameplay</li>
                  <li>Provide intuitive visualizations of abstract quantum principles</li>
                  <li>Encourage critical thinking and problem-solving skills</li>
                  <li>Offer progressive learning experiences for various skill levels</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <div className="space-y-4">
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg w-full"
              onClick={generatePuzzle}
            >
              Generate Puzzle
            </Button>
            {generatedPuzzle && (
              <Card className="bg-green-700">
                <CardContent>
                  <p>Generated Puzzle: {generatedPuzzle.type}</p>
                  <p>Difficulty: {generatedPuzzle.difficulty}/5</p>
                </CardContent>
              </Card>
            )}
            <Link to="/quantum-physics-sdk">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full text-lg w-full">
                Explore Quantum Physics SDK
              </Button>
            </Link>
            <Link to="/wiki/quantum-game-dev">
              <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full text-lg w-full">
                Quantum Game Dev Wiki
              </Button>
            </Link>
            <Link to="/mods/community">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-lg w-full">
                Community Mods
              </Button>
            </Link>
            <Link to="/get-started">
              <Button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full text-lg w-full">
                Back to AI Features
              </Button>
            </Link>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default QuantumPuzzles;