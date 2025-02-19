import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const GenerateEnvironment = () => {
  const [description, setDescription] = useState('');
  const [biome, setBiome] = useState('');
  const [complexity, setComplexity] = useState('');
  const [generating, setGenerating] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = () => {
    if (!description || !biome || !complexity) {
      toast.error("Please fill in all fields before generating.");
      return;
    }

    setGenerating(true);
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 3000)),
      {
        loading: 'Generating environment...',
        success: () => {
          setGenerating(false);
          navigate('/environment-gallery');
          return 'Environment generated successfully!';
        },
        error: 'Failed to generate environment.',
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Generate Environment</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <label htmlFor="description" className="block text-lg mb-2">Environment Description</label>
          <Textarea
            id="description"
            placeholder="Describe your desired environment..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-40 bg-purple-800 text-white"
          />
        </div>
        <div>
          <label htmlFor="biome" className="block text-lg mb-2">Biome Type</label>
          <Select onValueChange={setBiome}>
            <SelectTrigger className="w-full bg-purple-800 text-white">
              <SelectValue placeholder="Select a biome" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="forest">Forest</SelectItem>
              <SelectItem value="desert">Desert</SelectItem>
              <SelectItem value="tundra">Tundra</SelectItem>
              <SelectItem value="ocean">Ocean</SelectItem>
              <SelectItem value="quantum">Quantum Realm</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="complexity" className="block text-lg mb-2">Complexity Level</label>
          <Select onValueChange={setComplexity}>
            <SelectTrigger className="w-full bg-purple-800 text-white">
              <SelectValue placeholder="Select complexity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="extreme">Extreme</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={handleGenerate}
          disabled={generating}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg"
        >
          {generating ? 'Generating...' : 'Generate Environment'}
        </Button>
        <Link to="/environment-gallery">
          <Button className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            View Generated Environments
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GenerateEnvironment;