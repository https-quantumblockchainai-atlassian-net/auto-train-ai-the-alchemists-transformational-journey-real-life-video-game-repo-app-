import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AIDesignFeatures from '@/components/AIDesignFeatures';
import ResearchDashboard from '@/components/ResearchDashboard';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white"
    >
      <h1 className="text-4xl font-bold mb-6">Welcome to the Mystical Quantum Realm Builder</h1>
      <p className="text-xl mb-8">Create mind-bending, arcane adventures through multi-dimensional quantum realms using cutting-edge technologies.</p>
      
      <div className="space-y-4 mb-8">
        <Link to="/get-started">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Embark on Your Alchemical Journey</Button>
        </Link>
        <Link to="/sign-up">
          <Button className="w-full" variant="outline">Inscribe Your Name in the Cosmic Ledger</Button>
        </Link>
        <Link to="/demo">
          <Button className="w-full bg-green-600 hover:bg-green-700">Experience the Demo</Button>
        </Link>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Arcane AI Design Features</h2>
        <AIDesignFeatures />
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Multiversal Research Dashboard</h2>
        <ResearchDashboard />
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Quantum Realm Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/api/documentation" className="text-indigo-400 hover:underline">API Documentation</Link>
          <Link to="/sdk/quantum-realm" className="text-indigo-400 hover:underline">Quantum Realm SDK</Link>
          <Link to="/wiki/quantum-game-dev" className="text-indigo-400 hover:underline">Quantum Game Development Wiki</Link>
          <Link to="/mods/community" className="text-indigo-400 hover:underline">Community Mods</Link>
          <Link to="/tutorials" className="text-indigo-400 hover:underline">Arcane Tutorials</Link>
          <Link to="/forum" className="text-indigo-400 hover:underline">Quantum Developers Forum</Link>
          <Link to="/unreal-engine-integration" className="text-indigo-400 hover:underline">Unreal Engine 5.5 Integration</Link>
          <Link to="/nvidia-ace" className="text-indigo-400 hover:underline">NVIDIA ACE Integration</Link>
          <Link to="/nims" className="text-indigo-400 hover:underline">NIMS Documentation</Link>
          <Link to="/inworld-ai" className="text-indigo-400 hover:underline">Inworld.ai Integration</Link>
          <Link to="/metahumans" className="text-indigo-400 hover:underline">MetaHumans Creation</Link>
          <Link to="/cinematic-experiences" className="text-indigo-400 hover:underline">Realistic Cinematic Experiences</Link>
          <Link to="/gpt-engineer-dashboard" className="text-indigo-400 hover:underline">GPT Engineer Dashboard</Link>
          <Link to="/eos-ai-integration" className="text-indigo-400 hover:underline">EOS.AI Integration</Link>
          <Link to="/cybersecurity-vanguard" className="text-indigo-400 hover:underline">Cybersecurity Vanguard</Link>
          <Link to="/crystal-ai-assistant" className="text-indigo-400 hover:underline">Crystal AI Assistant</Link>
          <Link to="/quantum-physics-sdk" className="text-indigo-400 hover:underline">Quantum Physics SDK</Link>
          <Link to="/alchemical-realms-mods" className="text-indigo-400 hover:underline">Alchemical Realms Mods</Link>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advanced Quantum Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/features/quantum-superposition" className="text-indigo-400 hover:underline">Quantum Superposition</Link>
          <Link to="/features/entanglement-multiplayer" className="text-indigo-400 hover:underline">Entanglement Multiplayer</Link>
          <Link to="/features/quantum-procedural-generation" className="text-indigo-400 hover:underline">Quantum Procedural Generation</Link>
          <Link to="/features/quantum-ai-behaviors" className="text-indigo-400 hover:underline">Quantum AI Behaviors</Link>
          <Link to="/features/quantum-cryptography" className="text-indigo-400 hover:underline">Quantum Cryptography</Link>
          <Link to="/features/quantum-ml-game-design" className="text-indigo-400 hover:underline">Quantum ML Game Design</Link>
        </div>
      </div>
      
      <footer className="text-center text-gray-400">
        <p>&copy; 2024 Quantum Realm Game Builder Kit. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default Index;