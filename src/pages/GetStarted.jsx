import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Download, GitFork, FolderOpen, BookOpen, Play, Zap } from 'lucide-react';
import WolframData from '@/components/WolframData';
import Constellations from '@/components/Constellations';
import AIDesignFeatures from '@/components/AIDesignFeatures';

const BuildSteps = ({ steps }) => (
  <ul className="space-y-4">
    {steps.map((step, index) => (
      <li key={index} className="flex items-center">
        {step.external ? (
          <a href={step.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-300 hover:text-blue-100 underline">
            {step.icon}
            {step.text}
          </a>
        ) : (
          <span className="flex items-center text-blue-300">
            {step.icon}
            {step.text}
          </span>
        )}
      </li>
    ))}
  </ul>
);

const GetStarted = () => {
  const [activeSection, setActiveSection] = useState(null);

  const buildSteps = [
    {
      icon: <Download className="mr-2 h-4 w-4" />,
      text: "Download and install Unreal Engine 5.5",
      link: "https://www.unrealengine.com/en-US/download",
      external: true
    },
    {
      icon: <GitFork className="mr-2 h-4 w-4" />,
      text: "Clone our Quantum Matrix Builder repository",
      link: "https://github.com/quantum-matrix-builder/repo",
      external: true
    },
    {
      icon: <FolderOpen className="mr-2 h-4 w-4" />,
      text: "Open the project in Unreal Engine",
      link: "https://docs.unrealengine.com/5.1/en-US/opening-unreal-engine-projects/",
      external: true
    },
    {
      icon: <BookOpen className="mr-2 h-4 w-4" />,
      text: "Explore the tutorial levels to learn the basics",
      link: "https://docs.unrealengine.com/5.1/en-US/unreal-engine-tutorials/",
      external: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Get Started with Quantum Matrix Builder</h1>
      
      <div className="space-y-4 mb-8">
        <Button 
          onClick={() => setActiveSection('build')}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-lg"
        >
          <Play className="mr-2 h-4 w-4" />
          Start Build
        </Button>

        <Button 
          onClick={() => setActiveSection('ai')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full text-lg"
        >
          <Zap className="mr-2 h-4 w-4" />
          AI-Powered Design
        </Button>
      </div>
      
      {activeSection === 'build' && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Build process initiated. Follow these steps:</h2>
          <BuildSteps steps={buildSteps} />
        </div>
      )}

      {activeSection === 'ai' && <AIDesignFeatures />}
      
      <WolframData />
      <Constellations />
      
      <Link to="/">
        <Button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default GetStarted;
