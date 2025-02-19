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
          <Link to="/blueprints" className="text-indigo-400 hover:underline">Blueprints Documentation</Link>
          <Link to="/components" className="text-indigo-400 hover:underline">Components Library</Link>
          <Link to="/configuration" className="text-indigo-400 hover:underline">Configuration Guide</Link>
        </div>
      </div>
      
      <footer className="text-center text-gray-400">
        <p>&copy; 2024 Quantum Realm Game Builder Kit. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default Index;
