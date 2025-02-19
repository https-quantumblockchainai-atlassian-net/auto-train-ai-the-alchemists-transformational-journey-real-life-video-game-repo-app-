import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const AIStorylines = () => {
  const [theme, setTheme] = useState('');
  const [characters, setCharacters] = useState('');
  const [quantumEvents, setQuantumEvents] = useState('');
  const [generatedStoryline, setGeneratedStoryline] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateStoryline = async () => {
    setIsGenerating(true);
    // Simulating API call to generate storyline
    await new Promise(resolve => setTimeout(resolve, 2000));
    const storyline = `In a world where ${theme}, our heroes ${characters} face an unprecedented challenge. 
    As they navigate through ${quantumEvents}, they must make choices that will shape not only their own destinies 
    but the fate of multiple dimensions.`;
    setGeneratedStoryline(storyline);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Generate AI-Driven Storylines</h1>
      <p className="text-xl mb-8">Create dynamic, branching narratives that adapt to player choices and quantum events.</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Procedurally generated storylines and quests</li>
          <li>Character development based on player interactions</li>
          <li>Dynamic world events influenced by quantum phenomena</li>
          <li>Multilayered narratives across different dimensions</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AI Storytelling Capabilities</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Natural language processing for realistic dialogues</li>
          <li>Emotion analysis to create compelling character arcs</li>
          <li>Plot generation algorithms for unique story structures</li>
          <li>Adaptive storytelling based on player preferences and choices</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation Process</h2>
        <Card className="bg-purple-800">
          <CardHeader>
            <CardTitle>Generate Your Storyline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Enter the core theme of your game world"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
            <Input
              placeholder="Describe your main characters"
              value={characters}
              onChange={(e) => setCharacters(e.target.value)}
            />
            <Input
              placeholder="Define quantum events in your story"
              value={quantumEvents}
              onChange={(e) => setQuantumEvents(e.target.value)}
            />
            <Button 
              onClick={generateStoryline} 
              disabled={isGenerating || !theme || !characters || !quantumEvents}
              className="w-full"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Storyline...
                </>
              ) : (
                'Generate Storyline'
              )}
            </Button>
          </CardContent>
        </Card>
      </section>

      {generatedStoryline && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Generated Storyline</h2>
          <Card className="bg-purple-800">
            <CardContent className="p-4">
              <p>{generatedStoryline}</p>
            </CardContent>
          </Card>
        </section>
      )}

      <div className="space-y-4">
        <Link to="/get-started">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            Back to AI Features
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AIStorylines;