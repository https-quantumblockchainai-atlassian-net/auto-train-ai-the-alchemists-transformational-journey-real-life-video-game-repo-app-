import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, FileVideo, Image, Wrench, Webhook, BookOpen, Bitcoin, Network, Cpu, Zap, Globe, Star } from "lucide-react";
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: <Gamepad2 className="h-8 w-8 text-purple-400" />,
      title: "Text to Game",
      description: "Convert text descriptions into playable game elements",
      route: "/features/text-to-game"
    },
    {
      icon: <FileVideo className="h-8 w-8 text-purple-400" />,
      title: "Text to Video",
      description: "Generate in-game cutscenes and animations from text",
      route: "/features/text-to-video"
    },
    {
      icon: <Image className="h-8 w-8 text-purple-400" />,
      title: "Text to Image",
      description: "Create game assets and textures from text descriptions",
      route: "/features/text-to-image"
    },
    {
      icon: <Wrench className="h-8 w-8 text-purple-400" />,
      title: "Mod Creation",
      description: "Easily create and integrate game modifications",
      route: "/features/mod-creation"
    },
    {
      icon: <Webhook className="h-8 w-8 text-purple-400" />,
      title: "API Integration",
      description: "Seamlessly connect with external services and data sources",
      route: "/features/api-integration"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-400" />,
      title: "Wiki Generator",
      description: "Automatically generate documentation for your game",
      route: "/features/wiki-generator"
    },
    {
      icon: <Bitcoin className="h-8 w-8 text-purple-400" />,
      title: "Solana AI Integration",
      description: "Integrate Solana blockchain features with AI capabilities",
      route: "/features/solana-ai"
    },
    {
      icon: <Network className="h-8 w-8 text-purple-400" />,
      title: "Multi-Blockchain Support",
      description: "Interoperable support for XRPL and other blockchains",
      route: "/features/multi-blockchain"
    },
    {
      icon: <Cpu className="h-8 w-8 text-purple-400" />,
      title: "Quantum Blockchain AI",
      description: "Harness the power of quantum computing in blockchain AI",
      route: "/features/quantum-blockchain-ai"
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-400" />,
      title: "Quantum Blockchain Labs",
      description: "Experimental features from Quantum Blockchain research",
      route: "/features/quantum-blockchain-labs"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-400" />,
      title: "Multi-Dimensional Universes",
      description: "Create and explore multi-dimensional game worlds",
      route: "/features/multi-dimensional"
    },
    {
      icon: <Star className="h-8 w-8 text-purple-400" />,
      title: "Zodiac & Numerology Integration",
      description: "Incorporate cosmic elements into gameplay mechanics",
      route: "/features/zodiac-numerology"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="bg-purple-800 cursor-pointer hover:bg-purple-700 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center">
              {feature.icon}
              <span className="ml-2">{feature.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{feature.description}</CardDescription>
            <Button asChild className="mt-4 bg-blue-500 hover:bg-blue-600 w-full">
              <Link to={feature.route}>Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Features;
