import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import EnvironmentPreview from '../components/EnvironmentPreview';
import { motion } from 'framer-motion';

const GenerateEnvironment = () => {
  const [environmentName, setEnvironmentName] = useState('');
  const [environmentType, setEnvironmentType] = useState('');
  const [creatures, setCreatures] = useState([]);
  const [generatedEnvironment, setGeneratedEnvironment] = useState(null);

  const handleGenerate = () => {
    if (!environmentName || !environmentType) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Weaving the fabric of reality and summoning mystical creatures...',
        success: () => {
          setGeneratedEnvironment({ name: environmentName, type: environmentType, creatures });
          return 'Mystical environment with magical beings manifested successfully!';
        },
        error: 'The cosmic forces are misaligned. Please try again.',
      }
    );
  };

  const handleCreatureToggle = (creature) => {
    setCreatures(prev => 
      prev.includes(creature) 
        ? prev.filter(c => c !== creature)
        : [...prev, creature]
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white"
    >
      <h1 className="text-4xl font-bold mb-6">Generate Quantum Realm</h1>
      <p className="text-xl mb-8">Craft a new mystical, multi-dimensional environment using arcane Unreal Engine 5.5 sorcery, now with magical creatures!</p>
      
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Name your mystical realm"
          value={environmentName}
          onChange={(e) => setEnvironmentName(e.target.value)}
          className="mb-4 bg-purple-800 text-white"
        />
        <Select onValueChange={setEnvironmentType}>
          <SelectTrigger className="bg-purple-800 text-white">
            <SelectValue placeholder="Select Realm Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="quantum_realm">Quantum Nexus</SelectItem>
            <SelectItem value="arcane_dimension">Arcane Dimension</SelectItem>
            <SelectItem value="ethereal_plane">Ethereal Plane</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Magical Creatures</h3>
        <div className="flex flex-wrap gap-4">
          {['Unicorns', 'Dragons', 'Phoenix', 'Griffins', 'Merfolk', 'Faeries'].map(creature => (
            <div key={creature} className="flex items-center space-x-2">
              <Checkbox 
                id={creature} 
                checked={creatures.includes(creature)}
                onCheckedChange={() => handleCreatureToggle(creature)}
              />
              <label htmlFor={creature} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {creature}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <Button onClick={handleGenerate} className="mb-6 bg-indigo-600 hover:bg-indigo-700">Manifest Magical Environment</Button>
      
      {generatedEnvironment && (
        <EnvironmentPreview environment={generatedEnvironment} />
      )}
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Arcane Unreal Engine 5.5 Grimoire</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://docs.unrealengine.com/5.5/en-US/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
              Unreal Engine 5.5 Arcane Tomes
            </a>
          </li>
          <li>
            <a href="https://dev.epicgames.com/community/unreal-engine" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
              Unreal Engine Mystic Circle
            </a>
          </li>
          <li>
            <a href="https://www.unrealengine.com/marketplace/en-US/content-cat/assets/environments" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
              Unreal Engine Ethereal Marketplace
            </a>
          </li>
        </ul>
      </div>
      
      <div className="mt-6">
        <Link to="/environment-gallery">
          <Button variant="outline" className="text-indigo-400 border-indigo-400 hover:bg-indigo-900">View Mystical Realm Gallery</Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default GenerateEnvironment;