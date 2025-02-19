import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AIStorylines = () => {
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
        <ol className="list-decimal list-inside space-y-2">
          <li>Define the core themes and setting of your game world</li>
          <li>Input key story elements and character profiles</li>
          <li>Set parameters for quantum events and their narrative impact</li>
          <li>Generate initial storylines and branching paths</li>
          <li>Refine and iterate based on playtesting feedback</li>
        </ol>
      </section>

      <div className="space-y-4">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg">
          Generate Storyline
        </Button>
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