import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const AIDesignFeatures = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Generate optimized game elements",
      description: "AI creates balanced and engaging game objects, characters, and items.",
      link: "/features/optimized-game-elements"
    },
    {
      title: "Suggest quantum physics-based gameplay mechanics",
      description: "Implement mechanics inspired by quantum phenomena like superposition and entanglement.",
      link: "/features/quantum-physics-mechanics"
    },
    {
      title: "Create procedural multidimensional environments",
      description: "Generate complex, interconnected game worlds across multiple dimensions.",
      link: "/features/procedural-environments"
    },
    {
      title: "Balance game difficulty using machine learning",
      description: "Dynamically adjust challenge levels based on player performance and preferences.",
      link: "/features/difficulty-balancing"
    },
    {
      title: "Simulate quantum particle interactions",
      description: "Create realistic simulations of quantum particle behavior for educational or gameplay purposes.",
      link: "/features/quantum-simulations"
    },
    {
      title: "Generate AI-driven storylines",
      description: "Create dynamic, branching narratives that adapt to player choices and quantum events.",
      link: "/features/ai-storylines"
    },
    {
      title: "Design quantum-inspired puzzles",
      description: "Generate mind-bending puzzles based on quantum principles for engaging gameplay.",
      link: "/features/quantum-puzzles"
    },
    {
      title: "Text to Video: Cinematic Game Trailers",
      description: "Transform text descriptions into stunning, realistic cinematic game trailers and movies.",
      link: "/features/text-to-video"
    }
  ];

  const handleGenerate = (feature) => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: `Generating ${feature}...`,
        success: () => {
          if (feature === "Create procedural multidimensional environments") {
            navigate("/generate-environment");
          } else {
            navigate(features.find(f => f.title === feature).link);
          }
          return `${feature} generated successfully!`;
        },
        error: 'Generation failed. Please try again.',
      }
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">AI-Powered Design Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="bg-purple-800">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
              <div className="flex space-x-2 mt-4">
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => handleGenerate(feature.title)}
                >
                  Generate
                </Button>
                <Link to={feature.link}>
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AIDesignFeatures;
