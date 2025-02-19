import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Import feature components
import { AIDesign } from "./features/AIDesign";
import { TextToGame } from "./features/TextToGame";
import { TextToVideo } from "./features/TextToVideo";
import { TextToImage } from "./features/TextToImage";
import { ModCreation } from "./features/ModCreation";
import { APIIntegration } from "./features/APIIntegration";
import { WikiGenerator } from "./features/WikiGenerator";
import { BlockchainIntegration } from "./features/BlockchainIntegration";
import { QuantumComputing } from "./features/QuantumComputing";
import { MultiDimensional } from "./features/MultiDimensional";
import { ZodiacNumerology } from "./features/ZodiacNumerology";
import { CinematicTools } from "./features/CinematicTools";
import { DevelopmentTools } from "./features/DevelopmentTools";
import { QuantumTechnology } from "./features/QuantumTechnology";
import { QualityAssurance } from "./features/QualityAssurance";

const FeatureComponents = () => {
  const features = [
    { Component: AIDesign, title: "AI Design", route: "/features/ai-design" },
    { Component: TextToGame, title: "Text to Game", route: "/features/text-to-game" },
    { Component: TextToVideo, title: "Text to Video", route: "/features/text-to-video" },
    { Component: TextToImage, title: "Text to Image", route: "/features/text-to-image" },
    { Component: ModCreation, title: "Mod Creation", route: "/features/mod-creation" },
    { Component: APIIntegration, title: "API Integration", route: "/features/api-integration" },
    { Component: WikiGenerator, title: "Wiki Generator", route: "/features/wiki-generator" },
    { Component: BlockchainIntegration, title: "Blockchain Integration", route: "/features/blockchain-integration" },
    { Component: QuantumComputing, title: "Quantum Computing", route: "/features/quantum-computing" },
    { Component: MultiDimensional, title: "Multi-Dimensional Universes", route: "/features/multi-dimensional" },
    { Component: ZodiacNumerology, title: "Zodiac & Numerology", route: "/features/zodiac-numerology" },
    { Component: CinematicTools, title: "Cinematic Tools", route: "/features/cinematic-tools" },
    { Component: DevelopmentTools, title: "Development Tools", route: "/features/development-tools" },
    { Component: QuantumTechnology, title: "Quantum Technology", route: "/features/quantum-technology" },
    { Component: QualityAssurance, title: "Quality Assurance", route: "/features/quality-assurance" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map(({ Component, title, route }, index) => (
        <Card key={index} className="bg-purple-800 cursor-pointer hover:bg-purple-700 transition-colors">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Component />
            <Button asChild className="mt-4 bg-blue-500 hover:bg-blue-600 w-full">
              <Link to={route}>Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeatureComponents;