import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const AIDesignFeatures = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Quantum Difficulty Balancing",
      description: "Dynamically adjust challenge levels based on player performance across multiple realities.",
      link: "/features/difficulty-balancing"
    },
    {
      title: "Multiversal Particle Simulations",
      description: "Create realistic simulations of quantum particle behavior across interconnected dimensions.",
      link: "/features/quantum-simulations"
    },
    {
      title: "Arcane AI Storylines",
      description: "Generate dynamic, branching narratives that adapt to player choices and quantum events.",
      link: "/features/ai-storylines"
    },
    {
      title: "Mystical Quantum Puzzles",
      description: "Generate mind-bending puzzles based on arcane quantum principles for engaging gameplay.",
      link: "/features/quantum-puzzles"
    },
    {
      title: "Alchemical Text to Cinematic Trailers",
      description: "Transform mystical text descriptions into stunning, realistic cinematic game trailers and movies.",
      link: "/features/text-to-video"
    },
    {
      title: "Procedural Multidimensional Realms",
      description: "Generate complex, interconnected game worlds across multiple magical dimensions.",
      link: "/features/procedural-environments"
    }
  ];

  const handleGenerate = (feature) => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: `Channeling arcane energies for ${feature}...`,
        success: () => {
          navigate(features.find(f => f.title === feature).link);
          return `${feature} manifested successfully!`;
        },
        error: 'The cosmic forces are misaligned. Please try again.',
      }
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-purple-800 cursor-pointer hover:bg-purple-700 transition-colors">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              <div className="flex space-x-2 mt-4">
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => handleGenerate(feature.title)}
                >
                  Manifest
                </Button>
                <Link to={feature.link}>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                    Explore
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default AIDesignFeatures;