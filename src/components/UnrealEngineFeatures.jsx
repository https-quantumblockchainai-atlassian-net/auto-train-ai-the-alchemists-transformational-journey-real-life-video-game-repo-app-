import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const UnrealEngineFeatures = () => {
  const features = [
    {
      title: "Nanite",
      description: "Create vast, detailed worlds with virtualized geometry. Nanite intelligently streams and processes billions of polygons in real-time.",
      link: "https://docs.unrealengine.com/5.0/en-US/RenderingFeatures/Nanite/",
    },
    {
      title: "Lumen",
      description: "Achieve dynamic global illumination and reflections. Lumen provides real-time indirect lighting adapting to scene changes.",
      link: "https://docs.unrealengine.com/5.0/en-US/RenderingFeatures/Lumen/",
    },
    {
      title: "MetaHuman",
      description: "Create photorealistic digital humans in minutes. MetaHuman Creator offers a web-based app to customize highly detailed characters.",
      link: "https://www.unrealengine.com/en-US/metahuman",
    },
    {
      title: "World Partition",
      description: "Manage and stream massive worlds with ease. World Partition system automatically divides the world into a grid and streams the necessary cells.",
      link: "https://docs.unrealengine.com/5.0/en-US/WorldFeatures/WorldPartition/",
    },
    {
      title: "Niagara VFX",
      description: "Create complex, scalable particle effects. Niagara is a powerful VFX system for creating particle simulations with unprecedented flexibility.",
      link: "https://docs.unrealengine.com/5.0/en-US/RenderingFeatures/Niagara/",
    },
    {
      title: "Chaos Physics",
      description: "High-performance physics and destruction system. Chaos provides tools for realistic simulations of rigid-body dynamics and destruction.",
      link: "https://docs.unrealengine.com/5.0/en-US/InteractiveExperiences/Physics/ChaosPhysics/",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="bg-purple-800 hover:bg-purple-700 transition-colors">
          <CardHeader>
            <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white mb-4">{feature.description}</CardDescription>
            <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
              <a href={feature.link} target="_blank" rel="noopener noreferrer">Learn More</a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UnrealEngineFeatures;
