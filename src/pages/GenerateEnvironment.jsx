import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Sparkles } from 'lucide-react';
import RealmConfiguration from '@/components/quantum-realm/RealmConfiguration';
import RealmPreview from '@/components/quantum-realm/RealmPreview';
import ResourceLinks from '@/components/quantum-realm/ResourceLinks';

const GenerateEnvironment = () => {
  const [environmentName, setEnvironmentName] = useState('');
  const [environmentType, setEnvironmentType] = useState('');
  const [creatures, setCreatures] = useState([]);
  const [generatedEnvironment, setGeneratedEnvironment] = useState(null);

  const { data: realmTypes } = useQuery({
    queryKey: ['realmTypes'],
    queryFn: () => Promise.resolve([
      { id: 'quantum_realm', name: 'Quantum Nexus', description: 'A realm where quantum mechanics govern reality' },
      { id: 'arcane_dimension', name: 'Arcane Dimension', description: 'A dimension filled with magical energy' },
      { id: 'ethereal_plane', name: 'Ethereal Plane', description: 'A plane of existence between worlds' }
    ])
  });

  const { data: availableCreatures } = useQuery({
    queryKey: ['creatures'],
    queryFn: () => Promise.resolve([
      { id: 'unicorn', name: 'Unicorns', description: 'Majestic horned beings of pure light' },
      { id: 'dragon', name: 'Dragons', description: 'Ancient wyrms of immense power' },
      { id: 'phoenix', name: 'Phoenix', description: 'Immortal birds of flame' },
      { id: 'griffin', name: 'Griffins', description: 'Noble creatures of sky and earth' },
      { id: 'merfolk', name: 'Merfolk', description: 'Mystical beings of the deep' },
      { id: 'faerie', name: 'Faeries', description: 'Magical folk of nature' }
    ])
  });

  const handleGenerate = () => {
    if (!environmentName || !environmentType) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Weaving quantum threads into reality...',
        success: () => {
          setGeneratedEnvironment({
            name: environmentName,
            type: environmentType,
            creatures: creatures
          });
          return 'Quantum realm manifested successfully!';
        },
        error: 'Failed to manifest realm. The quantum harmonics were unstable.',
      }
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-8 w-8 text-purple-400" />
          <h1 className="text-4xl font-bold">Manifest Quantum Realm</h1>
        </div>
        <p className="text-xl mb-8">Shape reality itself using quantum mechanics and arcane technologies</p>

        <Tabs defaultValue="create" className="mb-8">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="create">Create Realm</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="create">
            <RealmConfiguration
              environmentName={environmentName}
              setEnvironmentName={setEnvironmentName}
              environmentType={environmentType}
              setEnvironmentType={setEnvironmentType}
              creatures={creatures}
              setCreatures={setCreatures}
              realmTypes={realmTypes}
              availableCreatures={availableCreatures}
            />

            <Button 
              onClick={handleGenerate} 
              className="w-full mb-8 bg-indigo-600 hover:bg-indigo-700"
            >
              Manifest Realm
            </Button>

            <RealmPreview
              generatedEnvironment={generatedEnvironment}
              realmTypes={realmTypes}
              availableCreatures={availableCreatures}
            />
          </TabsContent>

          <TabsContent value="resources">
            <ResourceLinks />
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/environment-gallery">
            <Button variant="outline" className="w-full">View Realm Gallery</Button>
          </Link>
          <Link to="/quantum-physics-sdk">
            <Button variant="outline" className="w-full">Quantum Physics SDK</Button>
          </Link>
          <Link to="/wiki/quantum-realms">
            <Button variant="outline" className="w-full">Quantum Realms Wiki</Button>
          </Link>
          <Link to="/tutorials">
            <Button variant="outline" className="w-full">Realm Creation Tutorials</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default GenerateEnvironment;